const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { NODE_ENV } = require('./constants');

module.exports = () => {
  const isProdBuild = NODE_ENV === 'production';

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/template.ts',
      filename: '../generated/client.ts',
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle-[contenthash].css',
      chunkFilename: '[id].bundle-[contenthash].css',
    }),
  ];

  const productionOnlyPlugins = isProdBuild
    ? [
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true,
        }),
      ]
    : [];

  return [...plugins, ...productionOnlyPlugins].filter((plugin) => !!plugin);
};
