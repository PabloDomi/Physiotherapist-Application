import { Link } from 'react-router-dom';
import '../css/NotFound.css'

interface NotFoundProps {
    type: string;
}

const NotFound = (props: NotFoundProps) => {

    const { type } = props;

    return (
        <div className='not-found' >
            <h1 className='not-found-h1'>404</h1>
            <h2 className='not-found-h2'>
                {
                    type === 'User'
                        ? '¡Ups! Parece que la página que buscas no existe. Puedes volver a la página de inicio haciendo click '
                        : '¡Ups! Parece que te has perdido. Puedes volver al inicio de sesión haciendo click '
                }
                {
                    type === 'User'
                        ? <Link className='not-found-link' to="/home">aquí</Link>
                        : <Link className='not-found-link' to="/">aquí</Link>
                }
            </h2>
        </div>
    );
};

export default NotFound;