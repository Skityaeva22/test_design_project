/* eslint-env node */
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  vue: {
    overrides:
      {
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
          registeredComponentsOnly: false,
          ignores: [],
        }],
        'vue/prop-name-casing': ['error', 'camelCase'],
      },
  },
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended', './.eslintrc-auto-import.json'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
  },
}))
