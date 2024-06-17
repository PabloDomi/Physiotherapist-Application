import type { Meta, StoryFn } from '@storybook/react';
import ModalWindow from '../../components/Modal';
import { Button } from 'react-bootstrap';
import '../../css/Modal.css'


// Define la configuración de Storybook para el componente ModalWindow
const meta: Meta<typeof ModalWindow> = {
    title: 'Components/ModalWindow',
    component: ModalWindow,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        show: { control: 'boolean' },
        title: { control: 'text' },
        content: { control: 'text' },
        action: { control: 'text' },
        data: { control: 'object' },
        behavior: { action: 'behavior' },
    },
};

export default meta;

const Template: StoryFn<typeof ModalWindow> = (args) => <ModalWindow {...args} />;

export const Default = Template.bind({});


Default.args = {
    show: true,
    title: 'Default Modal Title',
    content: (
        <>
            <p>Default Modal Content</p>
            <Button variant="primary">Action Button</Button>
        </>
    ),
    action: 'defaultAction',
    data: {},
    behavior: () => alert('Behavior function called!'),
};
