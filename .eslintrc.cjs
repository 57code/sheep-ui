module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // "eslint:recommended",
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
    // 'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    quotes: [1, 'single'] //引号类型 `` "" ''
  }
}
