module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@/**',
                group: 'external',
                position: 'after',
              },
            ],
            alphabetize: {
              order: 'asc',
            },
            pathGroupsExcludedImportTypes: ['type'],
            'newlines-between': 'always',
          },
        ],
        'import/no-duplicates': ['warn', { considerQueryString: true }],
        'import/no-unresolved': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
      },
    },
  },
};
