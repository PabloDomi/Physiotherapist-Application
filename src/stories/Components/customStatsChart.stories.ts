import type { Meta, StoryObj } from '@storybook/react';
import CustomStatsChart from '../../components/CustomStatsChart';

const mockData = {
  labels: ['Sentadilla', 'Press de banca', 'Peso muerto', 'Dominadas', 'Flexiones'],
  porcentualData: [120, 150, 180, 110, 140],
  timeData: [30, 35, 40, 28, 32],
  repsData: [12, 12, 15, 9, 10],
  titleChart: "Estadísticas de Ejercicios del Paciente",
  yaxisTitle: "Tiempo Total (s)",
  yaxisTitleOpposite: "Tiempo Promedio por Serie (s)",
  yaxisTitleReps: "Media de Repeticiones por Serie"
};

// Configuración de Storybook
const meta: Meta<typeof CustomStatsChart> = {
  title: 'Components/CustomStatsChart',
  component: CustomStatsChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    patient_id: { control: 'number', defaultValue: 1 },
    mockData: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof CustomStatsChart>;

// Definir datos simulados para la historia

// Historia principal para el componente
export const Default: Story = {
  args: {
    patient_id: 1, // Puedes simular un `patient_id` si es necesario
    mockData: mockData,
  }
};
