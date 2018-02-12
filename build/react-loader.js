const util = require('./util')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: util.cssLoaders({
        sourceMap: !isProduction,
        extract: isProduction
    })
}