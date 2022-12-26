import Button from './Button'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
}

export const Custom = Template.bind({})
Custom.args = {
  children: 'Custom Button',
  variant: 'unstyled',
  className:
    'inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
}
