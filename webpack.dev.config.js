const path = require('path')
const { merge } = require('webpack-merge')
const defaultConfig = require('./webpack.config.js')

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    inline: true,
    port: 3000
  }
})
