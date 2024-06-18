import type { Meta, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import LoginFormField from '../../components/LoginFormField';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '../../utils/schemas';


type LoginFormSchema = z.infer<typeof loginFormSchema>;

const meta: Meta<typeof LoginFormField> = {
  title: 'Components/LoginFormField',
  component: LoginFormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    placeholder: { control: 'text' },
    inputType: {
      control: 'select',
      options: ['text', 'password', 'email'],
    },
  },
};

export default meta;

const Template: StoryFn<typeof LoginFormField> = (args) => {
  const methods = useForm<LoginFormSchema>({ resolver: zodResolver(loginFormSchema) });

  return (
    <FormProvider {...methods}>
      <form>
        <LoginFormField {...args} formControl={methods.control} />
      </form>
    </FormProvider>
  );
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  name: 'email',
  placeholder: 'Enter your email',
  inputType: 'email',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  name: 'password',
  placeholder: 'Enter your password',
  inputType: 'password',
};