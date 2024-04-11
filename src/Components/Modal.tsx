import { type ModalProps } from "../Utils/types"
import '../index.css'
import { Button, Modal } from 'react-bootstrap'
import { useContext } from "react"
import { ThemeContext } from "../Services/themeProvider"
import { IonIcon } from "@ionic/react"
import { close } from "ionicons/icons"

const ModalWindow = ({ show, title, content }: ModalProps) => {

    const { theme, toggleModal } = useContext(ThemeContext)

    const handleClose = () => {

        toggleModal()
        // handleChangePassword() --> Función que actualice la contraseña en BBDD
    }




    return (
        <>
            <Modal show={show} onHide={() => handleClose} backdrop='static'>
                <Modal.Header className={theme === 'dark' ? 'dark-modal body-modal' : ''}>
                    <Modal.Title>{title}</Modal.Title>
                    <button className={theme === 'dark' ? 'icon-modal2 pt-1' : 'icon-modal pt-1'} onClick={handleClose}>
                        <IonIcon size='small' icon={close} />
                    </button>
                </Modal.Header>
                <Modal.Body className={theme === 'dark' ? 'dark-modal' : ''}>
                    {content}
                </Modal.Body>
                <Modal.Footer className={theme === 'dark' ? 'dark-modal footer-modal' : ''}>
                    <Button className={theme === 'dark' ? 'save-modal' : 'save-modal2'} variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalWindow