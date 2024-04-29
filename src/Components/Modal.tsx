import { ChangePasswordDataTypes, RegisterPatientDataTypes, type ModalProps } from "../utils/types"
import '../css/Modal.css'
import { Button, Modal } from 'react-bootstrap'
import { IonIcon } from "@ionic/react"
import { close } from "ionicons/icons"
import { useGlobalState } from "../store/useGlobalState"
import ChangePasswordService from "../services/ChangePasswordService"
import RegisterPatientService from "../services/RegisterPatientService"

const ModalWindow = ({ show, title, content, action, data }: ModalProps) => {

    const theme = useGlobalState(state => state.theme)
    const toggleChangePasswordModal = useGlobalState(state => state.toggleChangePasswordModal)
    const toggleRegisterPatientModal = useGlobalState(state => state.toggleRegisterPatientModal)

    const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        switch (action) {
            case 'changePassword':
                toggleChangePasswordModal()
                break
            case 'registerPatient':
                toggleRegisterPatientModal()
                break
            default:
                break
        }

        handleSubmit(event)
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        if (action === 'changePassword' && data) {

            const credentials = {
                email: (data as ChangePasswordDataTypes)?.email,
                newPassword: (data as ChangePasswordDataTypes)?.newPassword
            }

            await ChangePasswordService(credentials)
        }
        else if (action === 'registerPatient' && data) {
            const credentials = {
                name: (data as RegisterPatientDataTypes)?.name,
                surname: (data as RegisterPatientDataTypes)?.surname,
                age: (data as RegisterPatientDataTypes)?.age,
                gender: (data as RegisterPatientDataTypes)?.gender,
                routine_id: (data as RegisterPatientDataTypes)?.routine_id
            }

            await RegisterPatientService(credentials)
        }
        else {
            throw new Error('Error en la acción del modal')
            console.error('Error en la acción del modal')
        }
    }

    return (
        <>
            <Modal show={show} onHide={() => handleClose} backdrop='static'>
                <Modal.Header className={theme === 'dark' ? 'header-modal' : ''}>
                    <Modal.Title>{title}</Modal.Title>
                    <button className={theme === 'dark' ? 'icon-modal2 pt-1' : 'icon-modal pt-1'} onClick={handleClose}>
                        <IonIcon size='small' icon={close} />
                    </button>
                </Modal.Header>
                <Modal.Body className={theme === 'dark' ? 'body-modal' : ''}>
                    {content}
                </Modal.Body>
                <Modal.Footer className={theme === 'dark' ? 'footer-modal' : ''}>
                    <Button type="submit" className={theme === 'dark' ? 'save-modal' : 'save-modal2'} variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalWindow