import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Landing from '../../views/Landing';
import '../../css/Landing.css';

const meta: Meta<typeof Landing> = {
    title: 'Views/Landing',
    component: Landing,
    tags: ['autodocs'],
    decorators: [(Story) => {
        const theme = createTheme({
            palette: {
                mode: 'light', // Puedes cambiar esto a 'dark' si prefieres
            },
        });

        return (
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Story />
                </ThemeProvider>
            </BrowserRouter>
        );
    }],
};

export default meta;

const Template: StoryFn = (args) => <Landing {...args} />;

export const Default = Template.bind({});
Default.args = {};
