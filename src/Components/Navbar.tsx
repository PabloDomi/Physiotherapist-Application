import '../css/Navbar.css'
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { IonIcon } from '@ionic/react'
import { statsChart, barbell, options, bicycle } from 'ionicons/icons'
import ModalWindow from './Modal'
import { NavbarProps } from '../utils/types'
import useChangePassword from '../hooks/useChangePassword'
import useLogout from '../hooks/useLogout'
import useRegisterPatient from '../hooks/useRegisterPatient'
import { useGlobalState } from '../store/useGlobalState'
import GetDataService from '../services/GetDataService'
import { toast, Toaster } from 'sonner'
import useDeleteAdmin from '../hooks/useDeleteAdmin'

export const NavBar = ({ styledClassName, brandName, imageSrcPath }: NavbarProps) => {

    const theme = useGlobalState(state => state.theme)
    const setPatients = useGlobalState(state => state.setPatients)

    const {
        showModalDeleteAdmin,
        toggleModalDeleteAdmin,
        modalTitleDeleteAdmin,
        modalContentDeleteAdmin,
        userSelected
    } = useDeleteAdmin()

    const {
        changePasswordData,
        toggleModalChangePassword,
        showModalChangePassword,
        modalContentChangePassword,
        modalTitleChangePassword
    } = useChangePassword()

    const { logout } = useLogout()

    const {
        registerPatientData,
        modalContentRegisterPatient,
        modalTitleRegisterPatient,
        showModalRegisterPatient,
        toggleModalRegisterPatient
    } = useRegisterPatient()

    const handleClickChangePassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModalChangePassword()
    }

    const handleRegisterPatient = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModalRegisterPatient()
    }

    const handleDeleteAdmin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModalDeleteAdmin()
    }

    const refetchPatientData = async () => {
        try {
            const res = await GetDataService.getPatients()
            setPatients(res)
        } catch (error) {
            console.error(error)
            throw new Error("Error al obtener los pacientes")
        }
    }

    return (
        <Navbar className={styledClassName} expand="lg">
            <Toaster richColors />
            <Container className="container-fluid mx-0 contenedor-navbar">
                <Navbar.Brand>
                    <Nav.Link className="navbar-brand" href={'/home'}>
                        <img
                            src={imageSrcPath}
                            width="80"
                            height="80"
                            className="d-inline-block align-center"
                            alt="logo-image-physioterapist"
                        />
                        <span className={theme === 'light' ? "fw-bolder fs-4 brand-label-light" : "fw-bolder fs-4 brand-label"}>{brandName}</span>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto justify-content-end w-100">
                        <Nav.Link href="/home" className="active text-uppercase fw-bold px-4" id={theme === 'light' ? 'text-inactive' : 'text-inactive-dark'}>
                            Estadísticas
                            <IonIcon icon={statsChart} className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                        <Nav.Link href="/rutinas" className="active text-uppercase fw-bold px-4" id={theme === 'light' ? 'text-inactive' : 'text-inactive-dark'}>
                            Rutinas
                            <IonIcon icon={bicycle} className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                        <Nav.Link href="/ejercicios" className="active text-uppercase fw-bold px-4 ejercicios-nav-link" id={theme === 'light' ? 'text-inactive' : 'text-inactive-dark'}>
                            Ejercicios
                            <IonIcon icon={barbell} className='ps-2 pb-1 align-bottom' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='dropdown'>
                    <Button className={theme === 'light' ? 'btn-options' : 'btn-options-dark'}>
                        <IonIcon icon={options} id='main-color7' className='btn-options-image' />
                    </Button>
                    <ul className='dropdown-content'>
                        <li className='dropdown-content-li dropdown-content-li-1'>
                            <button
                                onClick={logout}
                                className={theme === 'light'
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
                            {showModalChangePassword &&
                                <ModalWindow
                                    show={showModalChangePassword}
                                    title={modalTitleChangePassword}
                                    content={modalContentChangePassword}
                                    action='changePassword'
                                    data={changePasswordData}
                                    behavior={() => toast.success('Contraseña cambiada con éxito')}
                                >
                                </ModalWindow>
                            }
                        </li>
                        <li className='dropdown-content-li dropdown-content-li-3'>
                            <button
                                onClick={handleDeleteAdmin}
                                className={theme === 'light'
                                    ? 'dropdown-content-button'
                                    : 'dropdown-content-button dropdown-content-button-dark'
                                } >Borrar Cuenta Administrador
                            </button>
                            {showModalDeleteAdmin &&
                                <ModalWindow
                                    show={showModalDeleteAdmin}
                                    title={modalTitleDeleteAdmin}
                                    content={modalContentDeleteAdmin}
                                    action='deleteAdmin'
                                    data={userSelected}
                                    behavior={() => toast.success('Administrador eliminado con éxito')}
                                >
                                </ModalWindow>
                            }
                        </li>
                        <li className='dropdown-content-li dropdown-content-li-4'>
                            <button
                                onClick={handleRegisterPatient}
                                className={theme === 'light'
                                    ? 'dropdown-content-button'
                                    : 'dropdown-content-button dropdown-content-button-dark'
                                } >Registrar Usuario
                            </button>
                            {showModalRegisterPatient &&
                                <ModalWindow
                                    show={showModalRegisterPatient}
                                    title={modalTitleRegisterPatient}
                                    content={modalContentRegisterPatient}
                                    action='registerPatient'
                                    data={registerPatientData}
                                    behavior={refetchPatientData}
                                >
                                </ModalWindow>
                            }
                        </li>
                    </ul>
                </div>
            </Container>
        </Navbar >
    )
}