const nodeExternals = require('webpack-node-externals');
const rules = require('./rules');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ROOT_DIR, DIST_DIR, NODE_MODULES_DIR } = require('./constants');

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  modules: [ROOT_DIR, NODE_MODULES_DIR],
};

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './server/server.ts',
  module: { rules },
  resolve,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle-[contenthash].css',
      chunkFilename: '[id].bundle-[contenthash].css',
    }),
  ],
  output: {
    filename: 'server.js',
    path: DIST_DIR,
  },
  externals: [nodeExternals()],
};
