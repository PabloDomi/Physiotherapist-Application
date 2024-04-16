import '../Css/Navbar.css'
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap"
import { IonIcon } from '@ionic/react'
import { statsChart, barbell, options, bicycle } from 'ionicons/icons'
import { useContext } from 'react'
import ModalWindow from './Modal'
import { ThemeContext } from '../Services/themeProvider'
import { NavbarProps } from '../Utils/types'

export const NavBar = ({ styledClassName, brandName, imageSrcPath }: NavbarProps) => {

    const { theme, showModal, toggleModal } = useContext(ThemeContext)

    const modalTitle = 'Cambio de Contraseña'

    const modalContent =
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={theme === 'dark' ? 'dark-modal' : ''}>Nueva Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Al menos 8 caracteres"
                    autoFocus
                    className={theme === 'dark' ? 'dark-modal2' : 'dark-modal3'}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
            >
                <Form.Label>Repetir Nueva Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Las contraseñas deben coincidir"
                    className={theme === 'dark' ? 'dark-modal2' : 'dark-modal3'}
                />
            </Form.Group>
        </Form>


    const handleClickChangePassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModal()
    }

    return (
        <Navbar className={styledClassName} expand="lg">
            <Container className="container-fluid">
                <Navbar.Brand>
                    <Nav.Link className="navbar-brand" href={'/home'}>
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
                        <Nav.Link href="/home" className="active text-uppercase fw-bold px-4 font-tilt-neon" id={theme === 'light' ? 'text-inactive' : 'text-inactive-dark'}>
                            Estadísticas
                            <IonIcon icon={statsChart} className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                        <Nav.Link href="/rutinas" className="active text-uppercase fw-bold px-4 font-tilt-neon" id={theme === 'light' ? 'text-inactive' : 'text-inactive-dark'}>
                            Rutinas
                            <IonIcon icon={bicycle} className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                        <Nav.Link href="/ejercicios" className="active text-uppercase fw-bold px-4 me-2 font-tilt-neon" id={theme === 'light' ? 'text-inactive' : 'text-inactive-dark'}>
                            Ejercicios
                            <IonIcon icon={barbell} className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='dropdown'>
                    <Button className='btn-options'>
                        <IonIcon icon={options} id='main-color7' className='btn-options-image' />
                    </Button>
                    <ul className='dropdown-content'>
                        <li className='dropdown-content-li dropdown-content-li-1'>
                            <button className={theme === 'light'
                                ? 'dropdown-content-button'
                                : 'dropdown-content-button dropdown-content-button-dark'
                            } >LogOut</button>
                        </li>
                        <li className='dropdown-content-li dropdown-content-li-2'>
                            <button onClick={handleClickChangePassword}
                                className={theme === 'light'
                                    ? 'dropdown-content-button'
                                    : 'dropdown-content-button dropdown-content-button-dark'
                                } >Cambiar Contraseña
                            </button>
                            {showModal &&
                                <ModalWindow
                                    show={showModal}
                                    title={modalTitle}
                                    content={modalContent}
                                >
                                </ModalWindow>
                            }
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
            </Container>
        </Navbar >
    )
}