module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    "indent": "off",
    // Disable explicit-function-return-type for all file types (JS, TS, etc)
    // It will be enabled below only for TS files.
    // https://github.com/typescript-eslint/typescript-eslint/issues/964
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  overrides: [
    // Enable explicit-function-return-type only for TS files
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
    }
  ]
}
