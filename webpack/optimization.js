const TerserPlugin = require('terser-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const isProduction = env === 'production' || true

module.exports = isProduction ? {
  minimizer: [
    new TerserPlugin({
      parallel: true,
      sourceMap: true,
    }),
  ],
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 6,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      // vendor chunk
      vendors: {
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        enforce: true,
      },
    },
  },
} : {}
