module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '{src,tests}/**/__tests__/*.{j,t}s?(x)',
        '{src,tests}/**/tests/**/*.spec.{j,t}s?(x)',
      ],
      rules: {
        "no-unused-expressions": "off",
      },
      env: {
        mocha: true,
      },
    },
  ],
};
