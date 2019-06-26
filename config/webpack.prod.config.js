const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(webpackBaseConfig,{
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
})