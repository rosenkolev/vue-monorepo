import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect } from 'storybook/test'
import Button from './Button.vue'

const meta = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

const flushVue = async () => {
  await Promise.resolve() // microtasks
  await new Promise(requestAnimationFrame)
  await new Promise(requestAnimationFrame)
}

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
  play: async ({ canvas, userEvent }) => {
    await flushVue()
    const button = canvas.getByRole('button')

    await expect(button).toBeVisible()
    await expect(button).toHaveClass('custom-button')
    await expect(button).toHaveClass('primary')
    await userEvent.click(button)
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
}
