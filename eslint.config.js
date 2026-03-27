import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroEslint from 'eslint-plugin-astro';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroEslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    ignores: ['node_modules/', 'dist/']
  }
];
