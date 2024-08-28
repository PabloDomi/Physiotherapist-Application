import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Ejercicios from '../../views/Ejercicios';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Ejercicios.css';
import { mockRoutines } from '../../utils/MockData';

const meta: Meta<typeof Ejercicios> = {
    title: 'Views/Ejercicios',
    component: Ejercicios,
    tags: ['autodocs'],
    decorators: [(Story) => {
        const lightTheme = createTheme({
            palette: {
                mode: 'light',
            },
        });

        useGlobalState.setState({
            theme: 'light',
            routines: mockRoutines,
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
};

export default meta;

const Template: StoryFn = (args) => <Ejercicios theme={args.theme} />

export const LightThemedEjercicios = Template.bind({});
LightThemedEjercicios.args = {
    theme: 'light',
};
