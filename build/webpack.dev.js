const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const SERVER_PORT = process.env.SERVER_PORT || 8000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: SERVER_PORT,
    hot: true,
  }
});
