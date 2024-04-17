import { useEffect, useState } from 'react';
import '../css/Landing.css'
import { IonIcon } from '@ionic/react';
import { logoGoogle, logoFacebook, logoMicrosoft, logoApple } from 'ionicons/icons';


const Landing = () => {

    const [container, setContainer] = useState<HTMLElement | null>(null);

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

    const handleRegister = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log('Register');
    }

    const handleLogin = (event: React.MouseEvent) => {
        event.preventDefault();

        console.log('Login');
    }


    return (
        <main className='landing-background'>
            <div className="landing-container" id="landing-container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Crear Cuenta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><IonIcon icon={logoGoogle} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoFacebook} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoMicrosoft} size='small' /></a>
                            <a href="#" className="icon"><IonIcon icon={logoApple} size='small' /></a>
                        </div>
                        <span>o usa tu correo electrónico para el registro</span>
                        <input type="text" placeholder="Tu nombre" />
                        <input type="email" placeholder="you@example.com" />
                        <input type="password" placeholder="*******" />
                        <button onClick={handleRegister}>Registrarse</button>
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
                        <input type="email" placeholder="you@example.com" />
                        <input type="password" placeholder="*******" />
                        <a href="#">¿Olvidaste la contraseña?</a>
                        <button onClick={handleLogin}>Iniciar Sesión</button>
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
