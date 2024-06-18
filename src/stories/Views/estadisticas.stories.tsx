import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { Estadisticas } from '../../views/Estadisticas';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Estadisticas.css';
import { mockPatients, mockCustomStats } from '../../utils/MockData';

const meta: Meta<typeof Estadisticas> = {
    title: 'Views/Estadisticas',
    component: Estadisticas,
    tags: ['autodocs'],
    decorators: [(Story) => {
        const lightTheme = createTheme({
            palette: {
                mode: 'light',
            },
        });

        useGlobalState.setState({
            theme: 'light',
            patients: mockPatients,
            customStatsData: mockCustomStats
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

const Template: StoryFn = (args) => <Estadisticas theme={args.theme} />;

export const DarkThemedStats = Template.bind({});
export const LightThemedStats = Template.bind({});

DarkThemedStats.args = {
    theme: 'dark',
};

LightThemedStats.args = {
    theme: 'light',
};
