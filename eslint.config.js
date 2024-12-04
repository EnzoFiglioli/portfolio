import { ESLint } from 'eslint';
import globals from 'globals';

const eslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'react-refresh'],
  rules: {
    // Agrega o personaliza tus reglas aquí
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Detecta la versión de React de tu proyecto
    },
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        // Puedes agregar reglas específicas para archivos TS/TSX aquí
      },
    },
  ],
  globals: globals.browser,
};

export default eslintConfig;
