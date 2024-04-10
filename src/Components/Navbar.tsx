import '../index.css'
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { IonIcon } from '@ionic/react'
import { statsChart, barbell, options, bicycle } from 'ionicons/icons'
import { useContext } from 'react'
import { ThemeContext } from '../Services/themeProvider'
interface NavbarProps {
    styledClassName: string // ClassName for the Navbar to set the style of darkTheme or lightTheme
    brandName: string // Name of the brand to display in the Navbar
    imageSrcPath: string // Path of the image to display in the Navbar
}

export const NavBar = ({ styledClassName, brandName, imageSrcPath }: NavbarProps) => {

    const { theme } = useContext(ThemeContext)

    return (
        <Navbar className={styledClassName} expand="lg">
            <Container className="container-fluid">
                <Navbar.Brand>
                    <Nav.Link className="navbar-brand" href={'/'}>
                        <img
                            src={imageSrcPath}
                            width="80"
                            height="80"
                            className="d-inline-block align-center"
                            alt="logo-image-physioterapist"
                        />
                        <span className="fw-bolder fs-4 brand-label">{brandName}</span>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto justify-content-end w-100">
                        <Nav.Link href="/" className="active text-uppercase fw-bold px-4 font-tilt-neon" style={{ color: '#749c74' }}>
                            Estadísticas
                            <IonIcon icon={statsChart} color='#749c74' className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                        <Nav.Link href="/rutinas" className="active text-uppercase fw-bold px-4 font-tilt-neon" style={{ color: '#749c74' }}>
                            Rutinas
                            <IonIcon icon={bicycle} color='#749c74' className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                        <Nav.Link href="/ejercicios" className="active text-uppercase fw-bold px-4 me-2 font-tilt-neon" style={{ color: '#749c74' }}>
                            Ejercicios
                            <IonIcon icon={barbell} color='#749c74' className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='dropdown'>
                    <Button className='btn-options'>
                        <IonIcon icon={options} id='main-color2' className='btn-options-image' />
                    </Button>
                    <ul className='dropdown-content'>
                        <li className='dropdown-content-li dropdown-content-li-1'>
                            <button className={theme === 'light'
                                ? 'dropdown-content-button'
                                : 'dropdown-content-button dropdown-content-button-dark'
                            } >LogOut</button>
                        </li>
                        <li className='dropdown-content-li dropdown-content-li-2'>
                            <button className={theme === 'light'
                                ? 'dropdown-content-button'
                                : 'dropdown-content-button dropdown-content-button-dark'
                            } >Cambiar Contraseña</button>
                        </li>
                        <li className='dropdown-content-li dropdown-content-li-3'>
                            <button className={theme === 'light'
                                ? 'dropdown-content-button'
                                : 'dropdown-content-button dropdown-content-button-dark'
                            } >Borrar Cuenta Administrador</button>
                        </li>
                        <li className='dropdown-content-li dropdown-content-li-4'>
                            <button className={theme === 'light'
                                ? 'dropdown-content-button'
                                : 'dropdown-content-button dropdown-content-button-dark'
                            } >Registrar Usuario</button>
                        </li>
                    </ul>
                </div>
                {/*
                    <form className="d-flex mb-2 mb-md-0">
                        <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        />
                        <button className="btn btn-outline-success" type="submit">
                        Buscar
                        </button>
                    </form>
                    */}
            </Container>
        </Navbar >
    )
}