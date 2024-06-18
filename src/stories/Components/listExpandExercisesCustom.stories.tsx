import type { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import ListExpandExercisesCustom from '../../components/ListExpandExercisesCustom';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Ejercicios.css';
import { ListExpandExercisesCustomProps } from '../../utils/types';

const meta: Meta<typeof ListExpandExercisesCustom> = {
    title: 'Components/ListExpandExercisesCustom',
    component: ListExpandExercisesCustom,
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
        exercise: { control: 'object' },
    },
};

export default meta;

const Template: StoryFn<ListExpandExercisesCustomProps> = (args) => <ListExpandExercisesCustom {...args} />;

export const Default = Template.bind({});
Default.args = {
    exercise: {
        id: 1,
        name: 'Ejercicio de ejemplo',
        description: 'Descripción del ejercicio de ejemplo',
        routine_ids: [1]
    },
};
