import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    bg: {
      control: {
        type: 'color',
        bg: ['#ff0000', '#00ff00', '#0000ff']
      }
    }
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
