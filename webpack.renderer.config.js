const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
});

module.exports = {
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
};
