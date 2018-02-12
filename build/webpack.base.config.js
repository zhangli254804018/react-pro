const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlStringReplace = require('html-string-replace-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin-client');
const cleanplugin = require('webpack-cleanup-plugin')
const dependencies = [
    'babel-polyfill',
    'react',
    'redux',
    'react-redux',
    'react-router',
    'lodash',
    // 'swiper'
    // 'jquery'
    // 'swiper'
];
const util = require('./util')
const isProduction = process.env.NODE_ENV === 'production'
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: 5 })
require('./check-versions')()
const NODE_ENV = BABEL_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        index: './src/js/index.js',
        vendor: dependencies
    },
    output: {
        crossOriginLoading: 'anonymous',
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'dist/',
        filename: '[name].js?v=[hash]',
        chunkFilename: '[id].js?v=[chunkhash]'
    },
    resolve: {
        extensions: ['.js', '.vue', '.jsx', '.css', '.json'],
        alias: {
            package: path.resolve(__dirname, '../package.json'),
            src: path.resolve(__dirname, '../src'),
            assets : path.resolve(__dirname, '../assets'),
            api: path.resolve(__dirname, '../src/api'),
            components: path.resolve(__dirname, '../src/components'),
            views: path.resolve(__dirname, '../src/views'),
            actions: path.join(__dirname, '../src/store/actions'),
            reducer: path.join(__dirname, '../src/store/reducers'),
            store: path.join(__dirname, '../src/store'),
            routes: path.join(__dirname, '../src/routes'),
            util: path.join(__dirname, '../src/utils'),
            QQapi:'http://open.mobile.qq.com/sdk/qqapi.js?_bid=152'
        }
    },
    externals: [
        require('webpack-require-http')
    ],
    module: {
        rules: [{
                test: /\.(js|jsx|vue)$/,
                loader: 'happypack/loader?id=eslint',
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /(node_modules)/,
                // exclude: [/(node_modules)(?![/|\\](swiper|Dom7))/],
                loader: 'happypack/loader?id=babel',
            },
            {
                test: /\.css$/,
                use: util.extLoaders({ extract: isProduction })['css']
            },
            {
                test: /\.less$/,
                use: util.extLoaders({ extract: isProduction })['less']
            },
            {
                test: /\.json$/,
                use: util.extLoaders({ extract: isProduction })['json']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: util.assetsPath('img/[name].[ext]?v=[hash:7]')
                    }
                }, {
                    loader: 'img-loader',
                    options: {
                        enabled: false,
                        gifsicle: {
                            interlaced: false
                        },
                        mozjpeg: {
                            progressive: true,
                            arithmetic: false
                        },
                        optipng: false, // disabled 
                        pngquant: {
                            floyd: 0.9,
                            speed: 2
                        },
                        svgo: {
                            plugins: [
                                { removeTitle: true },
                                { convertPathData: false }
                            ]
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        // new cleanplugin(),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        // new HtmlWebpackPlugin({ // Also generate a test.html
        //     filename: '../index.php',
        //     template: 'src/template/index.php'
        // }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            title:'點花燈 鬧元宵---- 一紙字謎 共賞華燈初上',
            filename: '../index.php',
            template: 'src/template/index.php'
        }),
        new HtmlStringReplace({
            enable: true,
            patterns: [
                {
                    match: /\.\.\/dist\//g,
                    replacement: function (match) {
                        return 'dist/';
                    }
                },
            ]
        }),
        new HtmlWebpackPlugin({
            filename: '../config.php',
            template: 'src/template/config.php',
            inject:false
        }),
        new AppCachePlugin({
            cache: ['../dist/img'],
            network: null, // No network access allowed!
            fallback: ['index.html', 'error.html'],
            settings: ['prefer-online'],
            exclude: [/.*$/], // Exclude file.txt and all .js files
            output: '../cache/manifest.appcache'
        }),
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            '_': 'lodash',
            // 'Swiper':'swiper'
            // 'react' :'react',
            // 'redux':'redux',
            // 'react-redux':'react-redux',
            // 'react-router':'react-router'
        }),
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory=true'],
        }),
        new HappyPack({
            id: 'react',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory=true'],
        }),
        new HappyPack({
            id: 'styles',
            threadPool: happyThreadPool,
            loaders: ['style-loader', 'css-loader', 'less-loader']
        }),
        new HappyPack({
            id: 'eslint',
            threadPool: happyThreadPool,
            loaders: ['eslint-loader'],
        }),
        new HappyPack({
            id: 'json',
            threadPool: happyThreadPool,
            loaders: ['json-loader'],
        }),
        new webpack.DefinePlugin({
            // ================================
            // 配置开发全局常量
            // ================================
            __DEV__: !isProduction,
            __PROD__: isProduction,
            __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
            __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
        })
    ],
    performance: {
        hints: "warning",
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    }
}