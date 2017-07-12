module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    "jsx-a11y",
    "import"
  ],
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  ecmaFeatures: {
    jsx: true,
    modules: true
  },
  globals: {
    __DEV__: true,
    window: true,
    document: true,
    localStroage: true,
  },
  rules: {
    strict: 0,
    "jsx-a11y/href-no-hash": "off",
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
  },
};
