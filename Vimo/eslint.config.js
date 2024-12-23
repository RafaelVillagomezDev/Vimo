import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': 'off', // React no necesita estar importado en los archivos modernos de JSX
            'react/jsx-no-target-blank': ['warn', { allowReferrer: false }], // Para evitar errores con `target="_blank"`
        },
        settings: {
            react: {
                version: 'detect', // Detecta automáticamente la versión de React
            },
        },
    },
];
