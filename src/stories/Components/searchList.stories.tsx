import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import SearchList from '../../components/SearchList';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Estadisticas.css';

const meta: Meta<typeof SearchList> = {
    title: 'Components/SearchList',
    component: SearchList,
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
        chartTitle: { action: 'chartTitle' },
        filteredPersons: { control: 'object' },
    },
};

export default meta;

const Template: StoryFn<typeof SearchList> = (args) => <SearchList {...args} />;

export const Default = Template.bind({});
Default.args = {
    chartTitle: (id: number) => { console.log(`Chart title clicked for person with id: ${id}`); },
    filteredPersons: [
        { id: 1, name: 'John', surname: 'Doe', age: 30, gender: 'Male', routine_id: 123 },
        { id: 2, name: 'Jane', surname: 'Doe', age: 28, gender: 'Female', routine_id: 124 },
        { id: 3, name: 'Sam', surname: 'Smith', age: 22, gender: 'Male', routine_id: 125 },
    ],
};
