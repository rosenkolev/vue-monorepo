import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect } from 'storybook/test'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    modelValue: 'Initial text',
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox')
    await expect(input).toHaveValue('Initial text')
    await userEvent.clear(input)
    await userEvent.type(input, 'New text')
    await expect(input).toHaveValue('New text')
  },
}
