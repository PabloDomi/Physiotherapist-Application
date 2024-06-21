import type { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../views/NotFound';
import '../../css/NotFound.css'; // Importa los estilos del componente

const meta: Meta<typeof NotFound> = {
    title: 'Components/NotFound',
    component: NotFound,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['User', 'Admin']
        },
    },
};

export default meta;

const Template: StoryFn<typeof NotFound> = (args) => (
    <BrowserRouter>
        <NotFound {...args} />
    </BrowserRouter>
);

export const UserNotFound = Template.bind({});
UserNotFound.args = {
    type: 'User',
};

export const AdminNotFound = Template.bind({});
AdminNotFound.args = {
    type: 'Admin',
};
