import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { getAliasFromTsConfig } from '../../vite-alias'

const alias = getAliasFromTsConfig('../../tsconfig.base.json')
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: process.env.APP_BASE_URL || '/',
  resolve: { alias },
})
