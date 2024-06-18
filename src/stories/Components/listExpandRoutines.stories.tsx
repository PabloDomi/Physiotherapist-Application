import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import ListExpandRoutines from '../../components/ListExpandRoutines';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Estadisticas.css';
import { ListExpandProps } from '../../utils/types';

const meta: Meta<typeof ListExpandRoutines> = {
    title: 'Components/ListExpandRoutines',
    component: ListExpandRoutines,
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
    tags: ['autodocs'],
    argTypes: {
        rutina: { control: 'object' },
        componentId: { control: 'text' },
    },
};

export default meta;

const Template: StoryFn<ListExpandProps> = (args) => <ListExpandRoutines {...args} />;

export const Default = Template.bind({});
Default.args = {
    componentId: 1,
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
