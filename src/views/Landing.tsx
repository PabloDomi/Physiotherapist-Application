import { useEffect, useState } from 'react';
import '../css/Landing.css'
import { registerFormSchema, loginFormSchema } from '../utils/schemas';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorAlert from '../components/ErrorAlert';
import SignUpFormField from '../components/SignUpFormField';
import LoginFormField from '../components/LoginFormField';
import LoginService from '../services/LoginService';
import RegisterService from '../services/RegisterService';
import { useGlobalState } from '../store/useGlobalState';
import { Link } from 'react-router-dom';
import { userLocalStorageTypes } from '../utils/types';

type ErrorMessage = {
    message: string
    severity: 'error' | 'warning' | 'info' | 'success'
}

type RegisterSchema = z.infer<typeof registerFormSchema>
type LoginSchema = z.infer<typeof loginFormSchema>

const Landing = () => {

    // Cogiendo estado global de user
    const setUser = useGlobalState(state => state.setUser)

    // Estado para mostrar el loader
    const setLoading = useGlobalState(state => state.setIsLoadingUser)

    // Hook para navegar
    // const navigate = useNavigate();

    // Estado para controlar el contenedor de los formularios
    const [container, setContainer] = useState<HTMLElement | null>(null);

    // Estado para controlar los mensajes de error
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
        message: '',
        severity: 'error'
    });

    // Hook para controlar los formularios de registro e inicio de sesión
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


    // Efecto para cambiar el estado del contenedor
    useEffect(() => {
        setContainer(document.getElementById('landing-container'))
    }, [container])

    // Efecto para mostrar los mensajes de error del register
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

    // Efecto para mostrar los mensajes de error del login
    useEffect(() => {
        if (formLogin.formState.errors.email) {
            setErrorMessage({ message: 'Debe introducir un email válido', severity: 'error' })
        }
        if (formLogin.formState.errors.password) {
            setErrorMessage({ message: 'La contraseña debe tener al menos 6 caracteres', severity: 'error' })
        }
    }, [formLogin.formState.errors])


    // Toggle del formulario de registro
    const handleRegisterToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        container?.classList.add('active');
    }

    // Toggle del formulario de inicio de sesión
    const handleLoginToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        container?.classList.remove('active');
    }

    // Submit del formulario de registro
    const handleRegisterSubmit: SubmitHandler<RegisterSchema> = (values: RegisterSchema) => {
        try {
            RegisterService(values)
            setErrorMessage({ message: 'Registro exitoso', severity: 'success' })
            container?.classList.remove('active')
        } catch (error) {
            throw new Error("Error en el registro de usuario")
        }
    }

    // const navigateToHome = () => {
    //     navigate('/home')
    // }

    const updateLocalData = (data: userLocalStorageTypes) => {
        setUser(data);
        const dataFormatted = JSON.stringify(data);
        localStorage.setItem('user', dataFormatted);

    }

    // Submit del formulario de inicio de sesión
    const handleLoginSubmit: SubmitHandler<LoginSchema> = async (values: LoginSchema) => {
        try {
            setLoading(true);  // Muestra el loader
            const data = await LoginService.LoginService(values);

            if (data) {
                updateLocalData(data);

                setErrorMessage({ message: 'Inicio de sesión exitoso', severity: 'success' });

                // Espera un breve momento para asegurar que el estado global se actualice
                setTimeout(() => {
                    setLoading(false);  // Oculta el loader
                }, 1000);  // Ajusta el tiempo si es necesario (1 segundo podría ser suficiente)

            } else {
                throw new Error("Datos de usuario no recibidos");
            }

        } catch (error) {
            setLoading(false);  // Oculta el loader si hay un error
            setErrorMessage({ message: 'Email o contraseña incorrectos', severity: 'error' });
            console.error((error as Error).message);
        }
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
                        <Link to={'/activateAccount/false'}>
                            ¿Olvidaste la contraseña?
                        </Link >
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
