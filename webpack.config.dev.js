const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {join} = require("node:path");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: {
      directory: join(__dirname, 'public'),
    },
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
});