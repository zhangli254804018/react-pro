const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const cleanplugin = require('webpack-cleanup-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path');
const merge = require('webpack-merge')
const config = require('../config')
const utils = require('./util')
const isELECTRON = process.env.NODE_ELECTRON === 'true'

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        publicPath:  config.build.assetsPublicPath, //isELECTRON ? path.join(__dirname, '/dist/') :
        filename: '[name].min.js?v=[chunkhash]',
        chunkFilename: '[id].js?v=[chunkhash]'
    },
    plugins: [
         // new cleanplugin(),
    // this allows uglify to strip all warnings
    // from Vue.js source code.
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),

    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
        filename: '[name].[chunkhash].css',
        disable: false,
        // publicPath: '../dist/',
        // filename: 'index.css',
        // allChunks: true
    }),
    new OptimizeCSSPlugin(),

    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 100 // Minimum number of characters
    }),

    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5, // Must be greater than or equal to one
        minChunkSize: 100
    }),

    new webpack.optimize.CommonsChunkPlugin({
        // names: ["app", "subPageA"]
        // (选择 chunks，或者忽略该项设置以选择全部 chunks)

        children: true,
        // (选择所有被选 chunks 的子 chunks)

        async: true,
        //(创建一个异步 公共chunk)

        minChunks: Infinity,
        // (在提取之前需要至少三个子 chunk 共享这个模块)
    }),
    // This minifies not only JavaScript, but also
    // the templates (with html-minifier) and CSS (with cssnano)!
    new webpack.optimize.UglifyJsPlugin({
        ie8: true,
        compress: {
            warnings: false,
            drop_console: true,
            unused:true
        },
        comments: false,
        except: ['exports', 'require'] //避免关键字被混淆
    }),
    ]
});
module.exports = webpackConfig