import { useEffect, useState } from 'react';
import '../css/Landing.css'
import { IonIcon } from '@ionic/react';
import { logoGoogle, logoFacebook, logoMicrosoft, logoApple } from 'ionicons/icons';
import { registerFormSchema } from '../utils/schemas';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorAlert from '../components/ErrorAlert';
import SignUpFormField from '../components/SignUpFormField';

type ErrorMessage = {
    message: string
    severity: 'error' | 'warning' | 'info' | 'success'
}

type RegisterSchema = z.infer<typeof registerFormSchema>

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

    useEffect(() => {
        setContainer(document.getElementById('landing-container'))
    }, [container])

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

    const handleLogin = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        console.log('Login');
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
                        <div className="social-icons">
                            <a href="#" className="icon"><IonIcon icon={logoGoogle} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoFacebook} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoMicrosoft} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoApple} size='small' /></a>
                        </div>
                        <span style={{ marginBottom: '0.8rem' }}>o usa tu correo electrónico para el registro</span>
                        <SignUpFormField
                            name='name'
                            placeholder='Tu nombre completo'
                            inputType='text'
                            formControl={control}
                        />
                        {errors.name && <p style={{ marginTop: '0.1rem', marginBottom: '0' }} className='text-danger'>{errors.name.message}</p>}
                        <SignUpFormField
                            name='email'
                            placeholder='you@example.com'
                            inputType='text'
                            formControl={control}
                        />
                        {errors.email && <p style={{ marginTop: '0.1rem', marginBottom: '0' }} className='text-danger'>{errors.email.message}</p>}
                        <SignUpFormField
                            name='password'
                            placeholder='*******'
                            inputType='password'
                            formControl={control}
                        />
                        {errors.password && <p style={{ marginTop: '0.1rem', marginBottom: '0' }} className='text-danger'>{errors.password.message}</p>}
                        <button type='submit'>Registrarse</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Iniciar Sesión</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><IonIcon icon={logoGoogle} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoFacebook} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoMicrosoft} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoApple} size='small' /></a>
                        </div>
                        <span>o usa tu correo electrónico</span>
                        <input type="email" placeholder="you@example.com" name='email-login' />
                        <input type="password" placeholder="*******" name='password-login' />
                        <a href="#">¿Olvidaste la contraseña?</a>
                        <button onSubmit={handleLogin}>Iniciar Sesión</button>
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
        </main>
    )
}

export default Landing
