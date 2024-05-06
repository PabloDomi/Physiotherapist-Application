import { AddExerciseToRoutineDataTypes, AddRoutineDataTypes, ChangePasswordDataTypes, RegisterPatientDataTypes, type ModalProps } from "../utils/types"
import '../css/Modal.css'
import { Button, Modal } from 'react-bootstrap'
import { IonIcon } from "@ionic/react"
import { close } from "ionicons/icons"
import { useGlobalState } from "../store/useGlobalState"
import ChangePasswordService from "../services/ChangePasswordService"
import RegisterPatientService from "../services/RegisterPatientService"
import DeleteDataService from "../services/DeleteDataService"
import useCheckNewPasswordData from "../hooks/useCheckNewPasswordData"
import { Toaster, toast } from "sonner"
import AddRoutineService from "../services/AddRoutineService"

const ModalWindow = ({ show, title, content, action, data, behavior }: ModalProps) => {

    const theme = useGlobalState(state => state.theme)
    const toggleChangePasswordModal = useGlobalState(state => state.toggleChangePasswordModal)
    const toggleRegisterPatientModal = useGlobalState(state => state.toggleRegisterPatientModal)
    const toggleAreUSureModal = useGlobalState(state => state.toggleAreUSureModal)
    const toggleDeleteAdminModal = useGlobalState(state => state.toggleDeleteAdminModal)
    const setCustomStatsDataUndefined = useGlobalState(state => state.setCustomStatsDataUndefined)
    const toggleModalAddRoutine = useGlobalState(state => state.toggleAddRoutineModal)
    const toggleModalAddExerciseToRoutine = useGlobalState(state => state.toggleAddExerciseToRoutineModal)
    const { checkChangePasswordFormData } = useCheckNewPasswordData()

    const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        switch (action) {
            case 'changePassword':
                toggleChangePasswordModal()
                break
            case 'registerPatient':
                toggleRegisterPatientModal()
                break
            case 'deletePatient':
                toggleAreUSureModal()
                setCustomStatsDataUndefined()
                break
            case 'deleteAdmin':
                toggleDeleteAdminModal()
                break
            case 'addRoutine':
                toggleModalAddRoutine()
                break
            case 'addExerciseToRoutine':
                toggleModalAddExerciseToRoutine()
                break
            default:
                break
        }

        handleSubmit(event)
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        console.log(data)

        if (data === null || data === undefined) {
            toast.info('Acción cancelada')
            throw new Error('Error en los datos del modal')
        }


        else if (action === 'changePassword' && data) {

            data = data as ChangePasswordDataTypes

            checkChangePasswordFormData(data)

            const credentials = {
                email: data?.email,
                newPassword: data?.newPassword
            }

            await ChangePasswordService(credentials)
            behavior()
        }
        else if (action === 'registerPatient' && data) {

            data = data as RegisterPatientDataTypes

            const credentials = {
                name: data?.name,
                surname: data?.surname,
                age: data?.age,
                gender: data?.gender,
                routine_id: data?.routine_id
            }

            await RegisterPatientService(credentials)
            behavior()
        }
        else if (action === 'deletePatient') {
            await DeleteDataService.deletePatient(data as number)
            behavior()
            toast.success('Paciente eliminado con éxito')
        }
        else if (action === 'deleteAdmin') {
            await DeleteDataService.deleteAdmin(data as string)
            behavior()
            setTimeout(() => { }, 3000)
            const user = JSON.parse(window.localStorage.getItem('user') || '{}');
            const userEmail = user.email;

            if (data === userEmail) {
                window.localStorage.clear()
                window.location.href = '/'
            }
        }
        else if (action === 'addRoutine' && data) {

            const AddRoutineData = data as AddRoutineDataTypes

            const userData = JSON.parse(window.localStorage.getItem('user') || '{}');

            const credentials = {
                name: AddRoutineData.name,
                description: AddRoutineData.description,
                estimatedTime: AddRoutineData.estimatedTime,
                user_id: userData.id as number,
                patient_id: AddRoutineData.patient_id
            }

            await AddRoutineService.AddRoutineService(credentials)

            behavior()
            toast.success('Rutina añadida con éxito')
        }
        else if (action === 'addExerciseToRoutine' && data) {
            const AddExerciseToRoutineData = data as AddExerciseToRoutineDataTypes

            const credentials = {
                name: AddExerciseToRoutineData.name,
                description: AddExerciseToRoutineData.description,
                routine_name: AddExerciseToRoutineData.routine_name
            }


            await AddRoutineService.AddExerciseToRoutineService(credentials)
            behavior()
            toast.success('Ejercicio añadido con éxito')
        }
        else {
            console.error('Error en la acción del modal')
            throw new Error('Error en la acción del modal')
        }
    }

    return (
        <>
            <Toaster richColors />
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