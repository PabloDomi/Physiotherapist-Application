import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import SearchCard from '../../components/SearchCard';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Estadisticas.css';

const meta: Meta<typeof SearchCard> = {
    title: 'Components/SearchCard',
    component: SearchCard,
    decorators: [(Story) => {
        const lightTheme = createTheme({
            palette: {
                mode: 'light',
            },
        });

        useGlobalState.setState({
            theme: 'light',
            changeCustomStatsData: () => { },
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
        person: { control: 'object' },
        onRemove: { action: 'onRemove' },
        setBehavior: { action: 'setBehavior' },
    },
};

export default meta;

const Template: StoryFn<typeof SearchCard> = (args) => <SearchCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    chartTitle: (id: number) => { console.log(`Chart title clicked for person with id: ${id}`); },
    person: { id: 1, name: 'John', surname: 'Doe', age: 30, gender: 'Male', routine_id: 123 },
    onRemove: (id: number) => { console.log(`Removed person with id: ${id}`); },
    setBehavior: ({ onRemove, toggleShowCard, person_Id }: { onRemove: (id: number) => void, toggleShowCard: () => void, person_Id: number }) => {
        onRemove(person_Id);
        toggleShowCard();
    },
};
