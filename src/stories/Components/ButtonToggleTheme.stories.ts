import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonToggleTheme } from '../../components/ButtonToggleTheme';
import { ButtonToggleThemeProps } from '../../utils/types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ButtonToggleThemeProps> = {
  title: 'Components/ButtonToggleTheme',
  component: ButtonToggleTheme,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
  args: {
    toggleTheme: fn(),
  },
};

export default meta;
type Story = StoryObj<ButtonToggleThemeProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightTheme: Story = {
  args: {
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
  },
};
