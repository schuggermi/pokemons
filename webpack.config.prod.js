const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/img', to: 'img', noErrorOnMissing: true},
                {from: 'src/css', to: 'css', noErrorOnMissing: true},
                {from: 'src/js', to: 'js', noErrorOnMissing: true},
                {from: 'src/robots.txt', to: 'robots.txt', noErrorOnMissing: true},
                {from: 'src/site.webmanifest', to: 'site.webmanifest', noErrorOnMissing: true},
            ],
        }),
    ],
});
