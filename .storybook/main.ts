import type { StorybookConfig } from '@storybook/vue3-vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  framework: '@storybook/vue3-vite',
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: {
          '@repo/ui': resolve(__dirname, '../packages/ui/src/index.ts'),
          vue: resolve(__dirname, '../node_modules/vue'),
        },
      },
    };
  },
};

export default config;
