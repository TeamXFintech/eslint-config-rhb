module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
  rules: {
    'import/extensions': [1, 'never', { json: 'always', svg: 'always' }],
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: 'none',
        semi: true,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
    'react/forbid-prop-types': [0, { forbid: [] }],
    'react/jsx-closing-bracket-location': [
      1,
      { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': [0, 0],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
};
