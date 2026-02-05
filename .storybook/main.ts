import type { StorybookConfig } from '@storybook/vue3-vite'
import { getAliasFromTsConfig } from '../vite-alias.ts'

const config: StorybookConfig = {
  stories: [
    '../packages/*/src/**/*.stories.@(ts|tsx)', // packages
    '../apps/*/src/**/*.stories.@(ts|tsx)', // apps
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: getAliasFromTsConfig('tsconfig.base.json'),
      },
    }
  },
}

export default config
