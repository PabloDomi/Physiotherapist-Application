import type { Meta, StoryObj } from '@storybook/react';
import CustomStatsChart from '../components/CustomStatsChart';
import { CustomStatsData } from '../utils/types';

// Define un ejemplo de datos que se utilizarán en las historias
const mockData: CustomStatsData = {
  titleChart: 'Example Chart',
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  yaxisTitle: 'Percentage',
  yaxisTitleOpposite: 'Time',
  porcentualData: [10, 20, 30, 40, 50],
  timeData: [1, 2, 3, 4, 5],
};

// Configuración de Storybook
const meta: Meta<typeof CustomStatsChart> = {
  title: 'Example/CustomStatsChart',
  component: CustomStatsChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
    },
  },
  args: {
    data: mockData,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockData,
  },
};
