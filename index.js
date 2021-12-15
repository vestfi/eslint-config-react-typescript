module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y', 'import', 'react-hooks', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'eol-last': ['error', 'always'],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/exports-last': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
      },
    ],
    'max-params': ['warn', 3],
    'no-alert': 'error',
    'no-extend-native': 'error',
    'no-return-await': 'error',
    'no-sync': 'error',
    'no-throw-literal': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'require-await': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
