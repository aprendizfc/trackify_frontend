import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['dist'],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      'no-var': 'error',
      'no-case-declarations': 'error',
      'no-confusing-arrow': ['warn', { allowParens: true }],
      'no-return-assign': 'warn',
      'no-trailing-spaces': ['warn', { skipBlankLines: true, ignoreComments: false }],
      'spaced-comment': ['warn', 'always', { markers: ["/"] }],
      'lines-between-class-members': 'error',
      'no-else-return': 'warn',
      'no-loss-of-precision': 'warn',
      'no-unsafe-optional-chaining': 'warn',
      'no-unreachable-loop': 'warn',
      'no-useless-catch': 'warn',
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      semi: ['error', 'never'],
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      'object-shorthand': ['error', 'always'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['import'], next: 'export' },
      ],
      'template-curly-spacing': ['error', 'never'],
      'max-len': [
        'error',
        {
          code: 90,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
    },
  },
]
