import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"
import { ChangePasswordDataTypes } from "../utils/types"

export function useChangePassword() {

    const theme = useGlobalState(state => state.theme)

    const showModalChangePassword = useGlobalState(state => state.showChangePasswordModal)
    const toggleModalChangePassword = useGlobalState(state => state.toggleChangePasswordModal)

    const modalTitleChangePassword = 'Cambio de Contraseña'

    const [changePasswordData, setChangePasswordData] = useState<ChangePasswordDataTypes>({
        email: '',
        password: '',
        newPassword: ''
    })

    const modalContentChangePassword =
        <Form>
            <Form.Group className="mb-3" controlId="changePasswordForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={(event) => setChangePasswordData({ email: event.target.value, password: changePasswordData.password, newPassword: changePasswordData.newPassword })}
                    type="email"
                    placeholder="Ingrese su email"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="changePasswordForm.ControlInput2">
                <Form.Label>Nueva Contraseña</Form.Label>
                <Form.Control
                    onChange={(event) => setChangePasswordData({ email: changePasswordData.email, password: event.target.value, newPassword: changePasswordData.newPassword })}
                    type="password"
                    placeholder="Al menos 8 caracteres"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="changePasswordForm.ControlInput3"
            >
                <Form.Label>Repetir Nueva Contraseña</Form.Label>
                <Form.Control
                    onChange={(event) => setChangePasswordData({ email: changePasswordData.email, password: changePasswordData.password, newPassword: event.target.value })}
                    type="password"
                    placeholder="Las contraseñas deben coincidir"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
        </Form>

    return { showModalChangePassword, toggleModalChangePassword, modalTitleChangePassword, modalContentChangePassword, theme, changePasswordData }
}

export default useChangePassword
