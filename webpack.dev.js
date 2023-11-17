const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9005,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    hot: true,
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
});
