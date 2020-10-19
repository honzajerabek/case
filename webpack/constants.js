const path = require('path');

module.exports = {
  ROOT_DIR: path.resolve(__dirname, '..'),
  PUBLIC_DIR: path.resolve(__dirname, '..', 'public'),
  NODE_MODULES_DIR: 'node_modules',
  DIST_DIR: path.resolve(__dirname, '..', 'dist'),
};
