import type { Meta, StoryObj } from '@storybook/vue3-vite'
import App from './App.vue'

const meta = {
  component: App,
  title: 'Apps/Portal/App',
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof App>

export const Default: Story = {}
