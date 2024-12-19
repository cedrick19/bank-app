import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactNative from 'eslint-plugin-react-native';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'], 
    languageOptions: {
      globals: globals.browser, 
      parser: '@typescript-eslint/parser', 
    },
    plugins: {
      react: pluginReact,
      'react-native': pluginReactNative,
      '@typescript-eslint': tseslint,
    },
    extends: [
      pluginJs.configs.recommended, 
      'plugin:react/recommended', 
      'plugin:react-native/all', 
      'plugin:@typescript-eslint/recommended', 
    ],
    rules: {
 
      'react/prop-types': 'off', 
      'react-native/no-unused-styles': 'warn', 
      'react-native/split-platform-components': 'warn', 
    },
  },
];
