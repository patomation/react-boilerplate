const { merge } = require('webpack-merge')
const defaultConfig = require('./webpack.config.js')

module.exports = merge(defaultConfig, {
  mode: 'production'
})
