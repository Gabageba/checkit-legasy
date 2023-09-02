module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    semi: 'error',
    'object-curly-newline': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    radix: 'off',
    indent: ['error', 2],
    'padded-blocks': ['error', { blocks: 'never', classes: 'always', switches: 'never' }],
    'import/no-cycle': 'warn',
    'import/no-duplicates': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-syntax': 'off',
    camelcase: 'error',
    'max-classes-per-file': ['error', { max: 2 }],
    'no-shadow': 'off',
    'new-cap': 'off',
    'no-lonely-if': 'error',
    'no-useless-escape': 'error',
    'no-return-await': 'error',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'error',
    'no-bitwise': 'off',
    'computed-property-spacing': 'off',
    'guard-for-in': 'error',
    'no-unused-vars': 'error',
    'no-throw-literal': 'error',
    'no-return-assign': 'error',
    'no-useless-return': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-fallthrough': 'error',
    'operator-assignment': 'off',
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-constant-condition': 'off',
    'no-unreachable': 'error',
    'no-multi-assign': 'error',
    'no-tabs': 'error',
    'array-callback-return': 'off',
    'no-debugger': 'warn',
    'default-case': 'error',
    'import/named': 'error',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'prefer-promise-reject-errors': 'warn',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'prefer-rest-params': 'off',
    'prefer-const': 'error',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'error',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'spaced-comment': 'off',
  },
};
