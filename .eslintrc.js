module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    extraFileExtensions: ['.json'],
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:functional/no-mutations',
  ],
  rules: {
    semi: 'error',
    'functional/no-loop-statement': 'error',
    'functional/prefer-readonly-type': 'off',
    'functional/no-let': ['error', { allowLocalMutation: true }],
    'functional/immutable-data': [
      'error',
      { ignorePattern: ['current', '__INITIAL_STATE__'] },
    ],
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'functional'],
  settings: {
    'import/ignore': ['node_modules'],
    react: {
      version: 'detect',
    },
  },
};
