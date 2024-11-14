import eslintPluginJSDoc from 'eslint-plugin-jsdoc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import js from '@eslint/js';

export default [
  { ignores: [ 'dist' ] },
  {
    files: [ '**/*.{js,jsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'jsdoc': eslintPluginJSDoc,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      'linebreak-style': 0,
      'max-len': [ 'warn', { code: 120 } ],
      'arrow-parens': [ 1, 'as-needed' ],
      'arrow-spacing': [ 1, { before: true, after: true } ],
      'array-bracket-spacing': [ 2, 'always' ],
      'object-curly-spacing': [ 2, 'always' ],
      'function-paren-newline': [ 2, 'multiline' ],
      'indent': [ 'error', 2 ],
      'no-console': 'warn',
      'no-eval': 'error',
      'no-extra-parens': [ 'warn', 'all', { ignoreJSX: 'multi-line' } ],
      'no-irregular-whitespace': 0,
      'no-unused-vars': 0,

      'react/prop-types': 0,
      'react/display-name': 0,
      'react/jsx-closing-bracket-location': [ 1, 'line-aligned' ],
      'react/jsx-first-prop-new-line': [ 1, 'multiline' ],
      'react/jsx-indent-props': [ 1, 'first' ],
      'react/jsx-max-props-per-line': [ 1, { when: 'multiline' } ],
      'react/jsx-no-useless-fragment': 1,
      'react/jsx-uses-vars': 1,
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,

      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      'jsdoc/require-jsdoc': 0,
      'jsdoc/no-undefined-types': 0,
      'jsdoc/require-param': 0,
      'jsdoc/check-param-names': 0,
      'jsdoc/require-param-description': 0,
      'jsdoc/require-returns-description': 0,
      'jsdoc/require-returns': 0,
    },
  }, {
    // Simple import sort for React components
    files: [ '**/*.jsx', '**/*.js', '**/*.mjs' ],
    rules: {
      'simple-import-sort/imports': [ 'warn', {
        groups: [ [
          '^react$', '^[a-z]', // `react` first, then packages starting with a character
          '^@', // Packages starting with `@`
          '^~', // Packages starting with `~`
          '^\\.\\.(?!/?$)', '^\\.\\./?$', // Imports starting with `../`
          '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', // Imports starting with `./`
          '^.+\\.s?css$', // Style imports
          '^\\u0000', // Side effect imports
        ] ],
      } ],
    },
  }, {
    // Google style guide
    // Original: https://github.com/google/eslint-config-google
    rules: {
      'no-cond-assign': 'off',
      'no-unexpected-multiline': 'error',
      'curly': [ 'error', 'multi-line' ],
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-invalid-this': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-with': 'error',
      'prefer-promise-reject-errors': 'error',
      'array-bracket-newline': 'off',
      'array-element-newline': 'off',
      'block-spacing': [ 'error', 'never' ],
      'brace-style': 'error',
      'camelcase': [ 'error', { properties: 'never' } ],
      'comma-dangle': [ 'error', 'always-multiline' ],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': 'error',
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'new-cap': 'error',
      'no-array-constructor': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': [ 'error', { max: 2 } ],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'one-var': [ 'error', {
        var: 'never',
        let: 'never',
        const: 'never',
      } ],
      'operator-linebreak': [ 'error', 'after' ],
      'padded-blocks': [ 'error', 'never' ],
      'quote-props': [ 'error', 'consistent' ],
      'quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
      'semi': 'error',
      'semi-spacing': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': [ 'error', {
        asyncArrow: 'always',
        anonymous: 'never',
        named: 'never',
      } ],
      'spaced-comment': [ 'error', 'always' ],
      'switch-colon-spacing': 'error',
      'constructor-super': 'error',
      'generator-star-spacing': [ 'error', 'after' ],
      'no-new-symbol': 'error',
      'no-this-before-super': 'error',
      'no-var': 'error',
      'prefer-const': [ 'error', { destructuring: 'all' } ],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'rest-spread-spacing': 'error',
      'yield-star-spacing': [ 'error', 'after' ],
    },
  },
];
