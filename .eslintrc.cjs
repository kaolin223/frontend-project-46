module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
  },
};
