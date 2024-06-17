import type { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../../components/Navbar';
import '../../css/Navbar.css'; // Importa los estilos del componente
import imagePath from '../../assets/physiotherapist-logo.png'


const meta: Meta<typeof NavBar> = {
    title: 'Components/NavBar',
    component: NavBar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        styledClassName: { control: 'text' },
        brandName: { control: 'text' },
        imageSrcPath: { control: 'text' },
    },
};

export default meta;

const Template: StoryFn<typeof NavBar> = (args) => (
    <BrowserRouter>
        <NavBar {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    styledClassName: 'navbar-class',
    brandName: 'Physioterapist',
    imageSrcPath: imagePath,
};
