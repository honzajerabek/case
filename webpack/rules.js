const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NODE_ENV } = require('./constants');

const rules = {
  development: [
    {
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      oneOf: [
        {
          test: /\.module\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /^((?!\.module).)*scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
  ],
  production: [
    {
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    },
    {
      oneOf: [
        {
          test: /\.module\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { modules: { exportLocalsConvention: 'camelCase' } },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /^((?!\.module).)*scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
  ],
  common: [
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      },
    },
  ],
};

module.exports = [...rules[NODE_ENV], ...rules.common];
