import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Search from '../../components/Search';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Estadisticas.css';


const meta: Meta<typeof Search> = {
    title: 'Components/Search',
    component: Search,
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
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        chartTitle: { control: 'text' },
        details: { control: 'object' },
        theme: { control: 'radio', options: ['light', 'dark'] },
    },
};

export default meta;

const Template: StoryFn<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
    details: [
        { id: 1, name: 'John', surname: 'Doe', age: 30, gender: 'Male', routine_id: 123 },
        { id: 2, name: 'Jane', surname: 'Doe', age: 28, gender: 'Female', routine_id: 124 },
        { id: 3, name: 'Sam', surname: 'Smith', age: 22, gender: 'Male', routine_id: 125 },
    ],
    theme: 'light',
};
