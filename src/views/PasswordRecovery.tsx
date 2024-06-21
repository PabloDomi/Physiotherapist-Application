import { Button } from '@mui/material'
import '../css/NotFound.css'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import LoginService from '../services/LoginService'
import { useNavigate, useParams } from 'react-router-dom'
import ChangePasswordService from '../services/ChangePasswordService'
import Loader from '../components/Loader'



const PasswordRecovery = () => {

    const { commingFromEmail } = useParams()
    const navigate = useNavigate()

    const isCommingFromEmail = commingFromEmail === 'true'
    const notCommingFromEmail = commingFromEmail === 'false'

    const [userEmail, setUserEmail] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
    const [validationToken, setValidationToken] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)


    const handlePasswordRecovery = (event: React.MouseEvent) => {
        event.preventDefault()

        if (userEmail === '') {
            return toast.error('Por favor, ingrese su email', {
                duration: 5000,
            })
        }

        LoginService.PasswordRecoveryService(userEmail)

        return toast.success('Correo de recuperación enviado', {
            duration: 5000,
        })
    }

    const handleChangePassword = async (event: React.MouseEvent) => {
        event.preventDefault()

        if (newPassword !== confirmNewPassword) {
            return toast.error('Las contraseñas no coinciden', {
                duration: 5000,
            })
        }

        const verifyTokenCredentials = {
            email: userEmail,
            validationToken
        }

        try {
            await ChangePasswordService.verifyValidationToken(verifyTokenCredentials)
        } catch (error) {
            return toast.error('Token de validación incorrecto', {
                duration: 5000,
            })
        }

        const credentials = {
            email: userEmail,
            newPassword: newPassword,
        }

        try {
            await ChangePasswordService.ChangePasswordServiceWithoutToken(credentials)
        } catch (error) {
            return toast.error('¡La nueva contraseña es igual a la anterior!', {
                duration: 5000,
            })
        }

        toast.success('Contraseña cambiada', {
            duration: 5000,
        })

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            navigate('/')
        }, 3000)

    }


    return (
        <>
            {loading && <Loader />}
            {notCommingFromEmail &&
                <div className='style-format' style={{ justifyContent: 'flex-start' }}>
                    <h1 className='style-format-text' style={{ marginTop: '18dvh' }}>Recuperación de contraseña</h1>
                    <h2 className='style-format-h2'>Esta es la pantalla de recuperación de contraseña.</h2>
                    <h2 className='style-format-h2'>Por favor, ingrese su email para enviarle un correo de recuperación.</h2>
                    <Toaster />
                    <Form>
                        <Form.Group className="password-recovery-input" controlId="changePasswordForm.ControlInput1">
                            <Form.Control
                                onChange={(event) => setUserEmail(event.target.value)}
                                type="email"
                                placeholder="Ingrese su email"
                                autoFocus
                                className='password-recovery-control'
                            />
                            <Button
                                id='password-recovery-button'
                                type='submit'
                                variant='contained'
                                onClick={handlePasswordRecovery}
                            >
                                Enviar correo de recuperación
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            }
            {isCommingFromEmail &&
                <div className='style-format' style={{ justifyContent: 'flex-start' }}>
                    <h1 className='style-format-text' style={{ marginTop: '18dvh' }}>Cambio de contraseña</h1>
                    <h2 className='style-format-h2'>Esta es la pantalla de cambio de contraseña.</h2>
                    <h2 className='style-format-h2'>Por favor, introduzca su nueva contraseña asegurandose que no se repite con la anterior.</h2>
                    <Toaster />
                    <Form>
                        <Form.Group className="password-recovery-input">
                            <Form.Control
                                onChange={(event) => setUserEmail(event.target.value)}
                                type="email"
                                placeholder="Ingrese su email"
                                autoFocus
                                className='password-recovery-control'
                            />
                            <Form.Control
                                onChange={(event) => setNewPassword(event.target.value)}
                                type="password"
                                placeholder="Ingrese su nueva contraseña"
                                className='password-recovery-control'
                            />
                            <Form.Control
                                onChange={(event) => setConfirmNewPassword(event.target.value)}
                                type="password"
                                placeholder="Ingrese su nueva contraseña nuevamente"
                                className='password-recovery-control'
                            />
                            <Form.Control
                                onChange={(event) => setValidationToken(event.target.value)}
                                type="text"
                                placeholder="Ingrese el token de validación"
                                className='password-recovery-control'
                            />
                            <Button
                                id='password-recovery-button'
                                type='submit'
                                variant='contained'
                                onClick={handleChangePassword}
                            >
                                Cambiar contraseña
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            }
        </>
    )
}

export default PasswordRecovery
