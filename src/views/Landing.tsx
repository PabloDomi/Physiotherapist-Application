import { useEffect, useState } from 'react';
import '../css/Landing.css'
import { registerFormSchema, loginFormSchema } from '../utils/schemas';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorAlert from '../components/ErrorAlert';
import SignUpFormField from '../components/SignUpFormField';
import LoginFormField from '../components/LoginFormField';

type ErrorMessage = {
    message: string
    severity: 'error' | 'warning' | 'info' | 'success'
}

type RegisterSchema = z.infer<typeof registerFormSchema>
type LoginSchema = z.infer<typeof loginFormSchema>

const Landing = () => {

    const [container, setContainer] = useState<HTMLElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
        message: '',
        severity: 'error'
    });

    const { handleSubmit,
        control,
        formState: { errors }
    } =
        useForm<RegisterSchema>({
            resolver: zodResolver(registerFormSchema),
            defaultValues: {
                name: '',
                email: '',
                password: ''
            }
        })

    const formLogin = useForm<LoginSchema>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    useEffect(() => {
        setContainer(document.getElementById('landing-container'))
    }, [container])

    useEffect(() => {
        if (errors.name) {
            setErrorMessage({ message: 'El nombre debe tener al menos 6 caracteres', severity: 'error' })
        }
        if (errors.email) {
            setErrorMessage({ message: 'Debe introducir un email válido', severity: 'error' })
        }
        if (errors.password) {
            setErrorMessage({ message: 'La contraseña debe tener al menos 6 caracteres', severity: 'error' })
        }
    }, [errors])

    useEffect(() => {
        if (formLogin.formState.errors.email) {
            setErrorMessage({ message: 'Debe introducir un email válido', severity: 'error' })
        }
        if (formLogin.formState.errors.password) {
            setErrorMessage({ message: 'La contraseña debe tener al menos 6 caracteres', severity: 'error' })
        }
    }, [formLogin.formState.errors])

    const handleRegisterToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        container?.classList.add('active');
    }

    const handleLoginToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        container?.classList.remove('active');
    }

    const handleRegisterSubmit: SubmitHandler<RegisterSchema> = (values: RegisterSchema) => {
        console.log(values)
        setErrorMessage({ message: 'Registro exitoso', severity: 'success' })
    }

    const handleLoginSubmit: SubmitHandler<LoginSchema> = (values: LoginSchema) => {
        console.log(values)

        setErrorMessage({ message: 'Inicio de sesión exitoso', severity: 'success' })
    }


    return (
        <main className='landing-background'>
            {
                errorMessage && <ErrorAlert message={errorMessage.message} severity={errorMessage.severity} />
            }
            <div className="landing-container" id="landing-container">
                <div className="form-container sign-up">
                    <form style={{ boxSizing: 'border-box' }} onSubmit={handleSubmit(handleRegisterSubmit)}>
                        <h1>Crear Cuenta</h1>
                        <SignUpFormField
                            name='name'
                            placeholder='Tu nombre completo'
                            inputType='text'
                            formControl={control}
                        />
                        <SignUpFormField
                            name='email'
                            placeholder='you@example.com'
                            inputType='text'
                            formControl={control}
                        />
                        <SignUpFormField
                            name='password'
                            placeholder='*******'
                            inputType='password'
                            formControl={control}
                        />
                        <button>Registrarse</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={formLogin.handleSubmit(handleLoginSubmit)}>
                        <h1>Iniciar Sesión</h1>
                        <LoginFormField
                            name='email'
                            placeholder='you@example.com'
                            inputType='text'
                            formControl={formLogin.control}
                        />
                        <LoginFormField
                            name='password'
                            placeholder='*********'
                            inputType='password'
                            formControl={formLogin.control}
                        />
                        <a href="#">¿Olvidaste la contraseña?</a>
                        <button>Iniciar Sesión</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>¡Bienvenido de nuevo!</h1>
                            <p>Introduce tu información personal para usar todas las funcionalidades</p>
                            <button onClick={handleLoginToggle} className="hidden" id="login">Iniciar Sesión</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>¿Tienes cuenta?</h1>
                            <p>Registrate con tu información personal para usar todas las funcionalidades</p>
                            <button onClick={handleRegisterToggle} className="hidden" id="register">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Landing
