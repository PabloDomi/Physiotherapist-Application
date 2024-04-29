import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"


export function useChangePassword() {

    const theme = useGlobalState(state => state.theme)

    const showModal = useGlobalState(state => state.showModal)
    const toggleModal = useGlobalState(state => state.toggleModal)

    const modalTitle = 'Cambio de Contraseña'

    const modalContent =
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nueva Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Al menos 8 caracteres"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
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
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
        </Form>

    return { showModal, toggleModal, modalTitle, modalContent, theme }
}

export default useChangePassword
