const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /(node_modules|\.webpack)/,
  use: {
    loader: 'babel-loader',
  },
});

rules.push({
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
