const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge(webpackBaseConfig,{
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: "0.0.0.0",
    port: '9000',
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    proxy: {
      '/gateway/**': {
        target: 'http://192.168.1.252:9999/gateway/',
        changeOrigin: true,
        pathRewrite: {
          '^/gateway': ''
        }
      }
    }
  }
})