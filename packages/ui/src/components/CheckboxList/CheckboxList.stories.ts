import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect } from 'storybook/test'
import CheckboxList from './CheckboxList.vue'

const meta: Meta<typeof CheckboxList> = {
  component: CheckboxList,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
  },
}
export default meta

type Story = StoryObj<typeof CheckboxList>

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
    ],
    modelValue: [],
  },
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByLabelText('Option 1')

    await userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    // Note: PrimeVue checkbox might not use native input exactly as expected/visible, check DOM if failing, but basic interaction usually works.
  },
}
