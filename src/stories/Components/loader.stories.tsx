import type { Meta, StoryObj } from '@storybook/react';
import Loader from '../../components/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered', // Usa 'centered' en lugar de 'fullscreen'
    docs: {
      description: {
        component: 'Este es un componente de cargador que muestra un spinner centrado con un fondo deshabilitado.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
