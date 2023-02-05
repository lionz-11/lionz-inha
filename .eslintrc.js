module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-base', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': ['error', { code: 140 }],
    'object-curly-newline': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off', // 임시
    'react/jsx-no-useless-fragment': 'off',
  },
};
