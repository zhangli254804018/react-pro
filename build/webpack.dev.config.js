const config = require('./webpack.base.config')
const webpack = require('webpack')
const cleanplugin = require('webpack-cleanup-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const path = require('path')
const configdev = require('../config')
const port = process.env.PORT || configdev.dev.port
const uri = 'http://localhost:' + port
const opn = require('opn')
Object.assign(config, {
    devtool: '#cheap-module-source-map',
    bail: true,
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        inline: true,
        hot: true,
        noInfo: true,
        port: port
    },
    plugins: (config.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin(),
        new LiveReloadPlugin({ appendScriptTag: true, port: 60001 })
    ])
});

webpack(config, function(err, stats) {
    if (configdev.dev.autoOpenBrowser) opn(uri)
    if (err) throw new Error(err)
});

module.exports = config