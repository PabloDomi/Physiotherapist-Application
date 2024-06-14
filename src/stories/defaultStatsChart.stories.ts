import type { Meta, StoryObj } from '@storybook/react';
import DefaultStatsChart from '../components/DefaultStatsChart';
import { mockStats } from '../utils/MockData';

const meta: Meta<typeof DefaultStatsChart> = {
  title: 'Example/DefaultStatsChart',
  component: DefaultStatsChart,
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
    data: mockStats[0],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockStats[0],
  },
};
