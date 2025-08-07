import pkg from '@eslint/js';
import globals from 'globals'; // Импортируем глобальные переменные
import jestPlugin from 'eslint-plugin-jest'; // Плагин для Jest
const { configs } = pkg;
export default [
  {
    // Базовые настройки
    files: ['**/*.js', '**/*.test.js'], // Проверяем JS и тестовые файлы
    ...configs.recommended, // Используем рекомендованные правила ESLint (опционально)
    languageOptions: {
      globals: {
        ...globals.node, // Глобалы Node.js (require, module, process и т. д.)
        ...globals.jest, // Глобалы Jest (describe, test, expect)
      },
      parserOptions: {
        ecmaVersion: 'latest', // Поддержка современного JavaScript
        sourceType: 'module', // Используем ES-модули (import/export)
      },
    },
    plugins: {
      jest: jestPlugin, // Подключаем плагин Jest
    },
    rules: {
      // Дополнительные правила ESLint
      'no-unused-vars': 'warn',
      // Правила для Jest
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
];