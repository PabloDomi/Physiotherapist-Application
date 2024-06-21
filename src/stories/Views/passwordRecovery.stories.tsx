import { Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PasswordRecovery from '../../views/PasswordRecovery';
import '../../css/NotFound.css';

// Configuración del componente en Storybook
export default {
    title: 'Views/PasswordRecovery',
    component: PasswordRecovery,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    decorators: [(Story, context) => {
        const initialEntries = context.parameters.initialEntries || ['/activateAccount/false'];
        return (
            <MemoryRouter initialEntries={initialEntries}>
                <Routes>
                    <Route path="/activateAccount/:commingFromEmail" element={<Story />} />
                </Routes>
            </MemoryRouter>
        );
    }],
} as Meta<typeof PasswordRecovery>;

// Historia para cuando se accede desde un enlace de correo electrónico
export const FromEmail = () => <PasswordRecovery />;
FromEmail.parameters = {
    initialEntries: ['/activateAccount/true'],
};

// Historia para cuando no se accede desde un enlace de correo electrónico
export const NotFromEmail = () => <PasswordRecovery />;
NotFromEmail.parameters = {
    initialEntries: ['/activateAccount/false'],
};
