import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import ListExpandExercises from '../../components/ListExpandExercises';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Rutinas.css';
import { RoutineData } from '../../utils/types';

const meta: Meta<typeof ListExpandExercises> = {
    title: 'Components/ListExpandExercises',
    component: ListExpandExercises,
    tags: ['autodocs'],
    decorators: [(Story) => {
        const lightTheme = createTheme({
            palette: {
                mode: 'light',
            },
        });

        useGlobalState.setState({
            theme: 'light',
        });

        return (
            <BrowserRouter>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Story />
                </ThemeProvider>
            </BrowserRouter>
        );
    }],
    argTypes: {
        rutina: { control: 'object' },
    },
};

export default meta;

const Template: StoryFn<{ rutina: RoutineData }> = (args) => <ListExpandExercises {...args} />;

export const Default = Template.bind({});
Default.args = {
    rutina: {
        id: 1,
        name: 'Rutina de Ejemplo',
        exercises: [
            { id: 1, name: 'Ejercicio 1', description: 'Descripción del ejercicio 1', routine_ids: [1] },
            { id: 2, name: 'Ejercicio 2', description: 'Descripción del ejercicio 2', routine_ids: [1] },
        ],
        estimatedTime: 30,
        description: 'Descripción de la rutina de ejemplo',
        patient_id: 1,
        user_id: 1
    },
};
