import { type ModalProps } from "../Utils/types"
import '../Css/Modal.css'
import { Button, Modal } from 'react-bootstrap'
import { IonIcon } from "@ionic/react"
import { close } from "ionicons/icons"
import { useGlobalState } from "../Store/useGlobalState"

const ModalWindow = ({ show, title, content }: ModalProps) => {

    const theme = useGlobalState(state => state.theme)
    const toggleModal = useGlobalState(state => state.toggleModal)

    const handleClose = () => {

        toggleModal()
        // handleChangePassword() --> Función que actualice la contraseña en BBDD
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
                    <Button className={theme === 'dark' ? 'save-modal' : 'save-modal2'} variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalWindow