module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    es6: true,
  },
  extends:[
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
        '*.js',
      
      ],
      excludedFiles: 'babel.config.js',
      parserOptions: {
        sourceType: 'module',

      },
    },
  ],
  
  parserOptions: {
    ecmaVersion: 'latest',
    "sourceType": 'module',
    "allowImportExportEverywhere": true
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
