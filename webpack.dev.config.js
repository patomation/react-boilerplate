const path = require('path')
const { merge } = require('webpack-merge')
const defaultConfig = require('./webpack.config.js')
require('dotenv').config()

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: process.env.PORT,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
})
