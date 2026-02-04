import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // Only include DevTools if not Storybook
    !process.env.STORYBOOK && vueDevTools(),
  ].filter(Boolean),
  base: process.env.APP_BASE_URL || '/',
  resolve: {
    alias: {
      '@repo': fileURLToPath(new URL('./packages', import.meta.url)),
    },
  },
})
