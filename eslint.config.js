import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ignores: ['node_modules', 'dist', 'build'],
    },
    js.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': pluginTs,
        },
        rules: {
            // ...pluginTs.configs.recommended.rules,
            "@typescript-eslint/no-unused-vars": "error",
        },
    },
    {
        files: ['**/*.jsx', '**/*.tsx'],
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            'jsx-a11y': pluginJsxA11y,
        },
        rules: {
            // ...pluginReact.configs.recommended.rules,
            // ...pluginReactHooks.configs.recommended.rules,
            // ...pluginJsxA11y.configs.recommended.rules,
            // 'react/react-in-jsx-scope': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
