const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 5000,
    watchContentBase: true
  }
});
