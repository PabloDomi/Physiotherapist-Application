import type { Meta, StoryObj } from '@storybook/react';
import DefaultStatsChart from '../../components/DefaultStatsChart';

type DataTypes = {
  labels: string[];
  porcentualData: number[];
  timeData: number[];
  repsData: number[];
  titleChart: string;
  yaxisTitle: string;
  yaxisTitleOpposite: string;
  yaxisTitleReps: string;
};

const mockStats: DataTypes = 
  {
    labels: ['Sentadilla', 'Press de banca', 'Peso muerto', 'Dominadas', 'Flexiones'],
    porcentualData: [120, 150, 180, 110, 140],  // Tiempo total en segundos
    timeData: [30, 35, 40, 28, 32],  // Tiempo promedio por serie en segundos
    repsData: [12, 12, 15, 9, 10],  // Media de repeticiones por serie
    titleChart: "Estadísticas de Ejercicios",
    yaxisTitle: "Tiempo Total (segundos)",
    yaxisTitleOpposite: "Tiempo Promedio por Serie (segundos)",
    yaxisTitleReps: "Media de repeticiones por serie"
  }


const meta: Meta<typeof DefaultStatsChart> = {
  title: 'Components/DefaultStatsChart',
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
    data: mockStats,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockStats,
  },
};
