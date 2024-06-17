import type { Meta, StoryObj } from '@storybook/react';
import ErrorAlert from '../../components/ErrorAlert';

// Configuración de Storybook
const meta: Meta<typeof ErrorAlert> = {
  title: 'Components/ErrorAlert',
  component: ErrorAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
  },
  args: {
    message: 'This is an error alert',
    severity: 'error',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Definición de las historias
export const Error: Story = {
  args: {
    message: 'This is an error alert',
    severity: 'error',
  },
};

export const Warning: Story = {
  args: {
    message: 'This is a warning alert',
    severity: 'warning',
  },
};

export const Info: Story = {
  args: {
    message: 'This is an info alert',
    severity: 'info',
  },
};

export const Success: Story = {
  args: {
    message: 'This is a success alert',
    severity: 'success',
  },
};
