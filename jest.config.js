module.exports = {
  testMatch: ['**/?(*.)+(spec|test).(j|t)s?(x)'],
  verbose: true,
  // transform: {
  //   '^.+\\.[jt]sx?$': [
  //     'babel-jest',
  //     { configFile: path.resolve(__dirname, 'babel.config.js') },
  //   ],
  // },
  moduleNameMapper: {
    'src/(.*)$': ['<rootDir>/src/$1'],
  },
  reporters: ['default'],
};
