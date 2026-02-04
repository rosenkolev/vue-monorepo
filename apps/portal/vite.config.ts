import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@repo/ui': resolve(__dirname, '../../packages/ui/src/index.ts')
    }
  }
});
