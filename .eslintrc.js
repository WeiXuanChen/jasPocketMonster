module.exports = {
    root: true,
    extends: ['airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    plugins: ['react-hooks', 'prettier'],
    env: {
      es6: true,
      browser: true,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    rules: {
      'prettier/prettier': ['error'],
      'react-hooks/rules-of-hooks': ['error'],
      "no-console": "off",
      'no-restricted-imports': [
        'error',
        {
          paths: ['services/api/util/api', 'axios'],
        },
      ],
    },
  };
  