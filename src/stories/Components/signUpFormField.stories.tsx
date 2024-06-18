import type { Meta, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import SignUpFormField from '../../components/SignUpFormField';
import '../../css/Estadisticas.css';
import { SignUpFormFieldProps } from '../../utils/types';
import { registerFormSchema } from '../../utils/schemas';
import { z } from 'zod';

const FormDecorator = (Story: StoryFn) => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form>
                <Story />
            </form>
        </FormProvider>
    );
};

type SignUpFormSchema = z.infer<typeof registerFormSchema>;

const meta: Meta<typeof SignUpFormField> = {
    title: 'Components/SignUpFormField',
    component: SignUpFormField,
    decorators: [FormDecorator],
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'text' },
        placeholder: { control: 'text' },
        inputType: { control: 'text' },
        formControl: { control: 'object' },
    },
};

export default meta;

const Template: StoryFn<SignUpFormFieldProps> = (args) => {
    const methods = useForm<SignUpFormSchema>();
    return (
        <FormProvider {...methods}>
            <form>
                <SignUpFormField {...args} formControl={methods.control} />
            </form>
        </FormProvider>
    );
};

export const NameInput = Template.bind({});
NameInput.args = {
    name: 'name',
    placeholder: 'Enter your name',
    inputType: 'text',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    name: 'email',
    placeholder: 'Enter your email',
    inputType: 'text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    name: 'password',
    placeholder: 'Enter your password',
    inputType: 'password',
};
