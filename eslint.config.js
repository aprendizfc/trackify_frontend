import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': 'warn',
      'no-var': 'error',
      'no-case-declarations': 'error',
      'no-confusing-arrow': ['warn', { allowParens: true }],
      'no-return-assign': 'warn',
      'no-trailing-spaces': ['warn', { skipBlankLines: true, ignoreComments: false }],
      'spaced-comment': ['warn', 'always'],
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
    },
  }
)
