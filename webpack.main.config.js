const webpack = require('webpack');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: {
    'main/index': './src/main/index.ts',
    'server/index': './src/server/index.ts',
  },
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  output: {
    path: __dirname + '/.webpack',
    filename: '[name].js',
  },
};
