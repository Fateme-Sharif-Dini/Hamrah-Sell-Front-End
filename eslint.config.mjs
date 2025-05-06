import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import unusedImport from 'eslint-plugin-unused-imports';
import tsParser from '@typescript-eslint/parser'; // Import the parser object

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    plugins: { 'unused-imports': unusedImport },
    ignores: ['.next/*', 'node_modules/*', 'tailwind.config.mjs', '.husky/*', '.storybook/*', 'cicd/*', 'deployment/*', 'removeConsoleLogs.js', 'src/instrumentation.node.ts'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'react/no-unescaped-entities': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'no-console': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'off', // ? https://legacy.reactjs.org/docs/hooks-rules.html
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_|^[A-Z][a-zA-Z0-9]*$',
          args: 'none',
          argsIgnorePattern: '^_',
        },
      ],
    },
    languageOptions: {
      parser: tsParser, // Use the imported parser object
    },
  },
];

export default eslintConfig;
