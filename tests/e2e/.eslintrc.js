module.exports = {
  plugins: ['eslint-plugin-cypress', 'cypress'],
  env: {
    mocha: true,
    'cypress/globals': true,
  },
  extends: ['plugin:cypress/recommended'],
  rules: {
    strict: 'off',
  },
}
