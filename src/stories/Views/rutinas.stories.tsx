import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { Rutinas } from '../../views/Rutinas';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Rutinas.css';
import { mockRoutines } from '../../utils/MockData';

const meta: Meta<typeof Rutinas> = {
    title: 'Views/Rutinas',
    component: Rutinas,
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

const Template: StoryFn = (args) => <Rutinas theme={args.theme} />;

export const DarkThemedRoutines = Template.bind({});
DarkThemedRoutines.args = {
    theme: 'dark',
};

export const LightThemedRoutines = Template.bind({});
LightThemedRoutines.args = {
    theme: 'light',
};
