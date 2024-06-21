import { Link } from 'react-router-dom';
import '../css/NotFound.css'

interface NotFoundProps {
    type: string;
}

const NotFound = (props: NotFoundProps) => {

    const { type } = props;

    return (
        <div className='style-format' >
            <h1 className='style-format-h1'>404</h1>
            <h2 className='style-format-h2'>
                {
                    type === 'User'
                        ? '¡Ups! Parece que la página que buscas no existe. Puedes volver a la página de inicio haciendo click '
                        : '¡Ups! Parece que te has perdido. Puedes volver al inicio de sesión haciendo click '
                }
                {
                    type === 'User'
                        ? <Link className='style-format-link' to="/home">aquí</Link>
                        : <Link className='style-format-link' to="/">aquí</Link>
                }
            </h2>
        </div>
    );
};

export default NotFound;