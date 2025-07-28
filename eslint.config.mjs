// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // line for disabling spacing rules start
      'prettier/prettier': [
        'off', // Prettier-এর সব linting warning/errror বন্ধ
      ],
      // "no-multiple-empty-lines": "off",      // একাধিক খালি লাইন নিয়ে আর ওয়ার্নিং দেবে না
      // "padded-blocks": "off",                // ব্লকের আগে/পরে খালি লাইন নিয়ে আর ওয়ার্নিং দেবে না
      // "no-trailing-spaces": "off",           // লাইনের শেষে ফাঁকা স্পেস থাকলেও ওয়ার্নিং দেবে না
      // "keyword-spacing": "off",              // কীওয়ার্ডের আগে/পরে স্পেস নিয়ে ওয়ার্নিং দেবে না
      // "space-infix-ops": "off"               // অপারেটরের আগে/পরে স্পেস নিয়ে ওয়ার্নিং দেবে না
      // line for disabling spacing rules end
      

    },
  },
);