const rules = require('./rules');
const plugins = require('./plugins');
const optimization = require('./optimization');
const { ROOT_DIR, PUBLIC_DIR, NODE_MODULES_DIR } = require('./constants');

module.exports = () => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const isProdBuild = nodeEnv === 'production';

  const polyfills = [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'whatwg-fetch',
  ];

  const entry = isProdBuild
    ? [...polyfills, './src/index.tsx']
    : ['react-hot-loader/patch', ...polyfills, './src/index.tsx'];

  const output = {
    path: PUBLIC_DIR,
    filename: 'bundle-[hash].js',
    publicPath: '/',
    pathinfo: false,
  };

  const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [ROOT_DIR, NODE_MODULES_DIR],
  };

  const devtool = isProdBuild ? 'source-map' : 'cheap-module-eval-source-map';

  return {
    entry,
    output,
    resolve,
    devtool,
    optimization,
    module: { rules },
    plugins: plugins(),
  };
};
