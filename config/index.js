// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    template: path.resolve(__dirname, '../src/template/index.php'),
    build: {
        env: require('./prod.env'),
        assetsRoot: path.resolve(__dirname, '../dist/'),
        assetsSubDirectory: '../dist/',
        assetsPublicPath: 'dist/',
        assetsPublishCss:'../dist/',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 6653,
        autoOpenBrowser: false,
        assetsSubDirectory: '../dist/',
        assetsPublishCss: 'dist/',
        assetsPublicPath: 'dist/',
        proxyTable: {},
        cssSourceMap: false
    }
}