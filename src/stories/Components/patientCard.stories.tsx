import type { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PatientCard from '../../components/PatientCard';
import { useGlobalState } from '../../store/useGlobalState';
import '../../css/Estadisticas.css';

// Configura el proveedor de estado global
const GlobalStateDecorator = (Story: StoryFn) => {
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    // Configurar valores iniciales del estado global
    useGlobalState.setState({
        theme: 'light',
        patients: [
            { id: 1, name: 'John', surname: 'Doe', age: 30, gender: 'Male', routine_id: 123 },
            { id: 2, name: 'Jane', surname: 'Doe', age: 28, gender: 'Female', routine_id: 124 }
        ],
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        </BrowserRouter>
    );
};

const meta: Meta<typeof PatientCard> = {
    title: 'Components/PatientCard',
    component: PatientCard,
    decorators: [GlobalStateDecorator],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        patientId: { control: 'text' },
        handleGoBack: { action: 'handleGoBack' },
    },
};

export default meta;

const Template: StoryFn<typeof PatientCard> = (args) => <PatientCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    patientId: 1,
};
