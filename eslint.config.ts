import storybook from 'eslint-plugin-storybook'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },
  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/node_modules/**',
    '**/storybook-static/**',
    '**/.vitepress/**',
    '.turbo/**',
  ]),
  ...pluginVue.configs['flat/essential'],
  ...tseslint.configs.recommended,
  vueTsConfigs.recommended,
  ...storybook.configs['flat/recommended'],
  prettierSkipFormatting,
  {
    ...pluginVitest.configs.recommended,
    files: [
      'apps/**/*.test.ts',
      'packages/**/*.test.ts',
      'apps/**/*.spec.ts',
      'packages/**/*.spec.ts',
    ],
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'storybook/no-uninstalled-addons': 'warn',
    },
  },

  skipFormatting
)
