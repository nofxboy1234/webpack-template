import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

import eslintConfigPrettier from 'eslint-config-prettier';
import stylistic from '@stylistic/eslint-plugin';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('airbnb-base'),
  eslintConfigPrettier,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
    },
  },
  {
    ignores: ['**/node_modules/', '**/dist/', 'package-lock.json'],
  },
];
