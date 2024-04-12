import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const NotFound: React.FC = () => {
    return (
        <div className='not-found' >
            <h1 className='not-found-h1'>404</h1>
            <h2 className='not-found-h2'>
                Puedes volver a la página de inicio haciendo click&nbsp;
                <Link className='not-found-link' to="/home">aquí</Link>
            </h2>
        </div>
    );
};

export default NotFound;