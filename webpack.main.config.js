const rules = require('./webpack.rules');

rules.push({
  test: /\.ts$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
  exclude: /node_modules/,
});

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: {
    'main/index': './src/main/index.ts',
    'server/index': './src/server/index.ts',
  },
  externals: [
    'cache-manager',
    '@nestjs/websockets',
    '@nestjs/microservices',
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices/microservices-module',
  ],
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    path: __dirname + '/.webpack',
    filename: '[name].js',
  },
};
