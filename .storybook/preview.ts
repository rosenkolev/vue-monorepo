import { setup } from '@storybook/vue3'
import type { Preview } from '@storybook/vue3-vite'
import type { App } from 'vue'

import PrimeVue from 'primevue/config'

import { theme } from '@repo/ui'

setup((app: App) => {
  app.use(PrimeVue, theme.primeVueOptions)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  decorators: [
    (story, context) => {
      const backgroundName: string = context.globals?.backgrounds?.value
      const isDark = backgroundName === 'dark'
      theme.setDarkMode(isDark)
      return {
        components: { story },
        template: '<story />',
      }
    },
  ],
}

export default preview
