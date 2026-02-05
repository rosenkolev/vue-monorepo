import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Monorepo Docs',
  description: 'Documentation for the Vue Monorepo',
  outDir: '../dist/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
    ],
    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
        ],
      },
    ],
  },
})
