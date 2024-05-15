import { AddExerciseToRoutineDataTypes, AddRoutineDataTypes, ChangePasswordDataTypes, EditExerciseDataTypes, EditExerciseServiceProps, EditRoutineDataTypes, RegisterPatientDataTypes, type ModalProps } from "../utils/types"
import '../css/Modal.css'
import { Button, Modal } from 'react-bootstrap'
import { IonIcon } from "@ionic/react"
import { close } from "ionicons/icons"
import { useGlobalState } from "../store/useGlobalState"
import ChangePasswordService from "../services/ChangePasswordService"
import RegisterPatientService from "../services/RegisterPatientService"
import DeleteDataService from "../services/DeleteDataService"
import useCheckNewPasswordData from "../hooks/useCheckNewPasswordData"
import PostPutDataService from "../services/PostPutDataService"
import { Toaster, toast } from "sonner"
import GetDataService from "../services/GetDataService"

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
    const toggleModalEditRoutine = useGlobalState(state => state.toggleEditRoutineModal)
    const toggleModalDeleteRoutine = useGlobalState(state => state.toggleDeleteRoutineModal)
    const toggleModalEditExercise = useGlobalState(state => state.toggleEditExerciseModal)
    const toggleModalDeleteExercise = useGlobalState(state => state.toggleDeleteExerciseModal)


    const alreadyHasRoutineError = () => {
        toast.error('El paciente ya tiene una rutina asignada')
    }

    const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        switch (action) {
            case 'changePassword':
                toggleChangePasswordModal()
                toast.info('Acción cancelada')
                break
            case 'registerPatient':
                toggleRegisterPatientModal()
                toast.info('Acción cancelada')
                break
            case 'deletePatient':
                toggleAreUSureModal()
                setCustomStatsDataUndefined()
                toast.info('Acción cancelada')
                break
            case 'deleteAdmin':
                toggleDeleteAdminModal()
                toast.info('Acción cancelada')
                break
            case 'addRoutine':
                toggleModalAddRoutine()
                toast.info('Acción cancelada')
                break
            case 'addExerciseToRoutine':
                toggleModalAddExerciseToRoutine()
                toast.info('Acción cancelada')
                break
            case 'deleteRoutine':
                toggleModalDeleteRoutine()
                toast.info('Acción cancelada')
                break
            case 'editRoutine':
                toggleModalEditRoutine()
                toast.info('Acción cancelada')
                break
            case 'deleteExercise':
                toggleModalDeleteExercise()
                toast.info('Acción cancelada')
                break
            case 'editExercise':
                toggleModalEditExercise()
                toast.info('Acción cancelada')
                break
            default:
                break
        }
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        event.stopPropagation()

        if (data === null || data === undefined) {
            toast.warning('Error en los datos del modal')
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
            toggleChangePasswordModal()
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
            toggleRegisterPatientModal()
        }

        else if (action === 'deletePatient') {
            await DeleteDataService.deletePatient(data as number)
            behavior()
            toast.success('Paciente eliminado con éxito')
            toggleAreUSureModal()
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
            toggleDeleteAdminModal()
        }

        else if (action === 'editRoutine' && data) {

            const editRoutineData = data as EditRoutineDataTypes

            const credentials = {
                routine_id: editRoutineData.routine_id as number,
                name: editRoutineData.name,
                description: editRoutineData.description,
                estimatedTime: editRoutineData.estimatedTime,
                patient_id: editRoutineData.patient_id
            }

            await PostPutDataService.EditRoutineService(credentials)

            behavior()
            toast.success('! Rutina actualizada ! 🎉')
            toggleModalEditRoutine()
        }

        else if (action === 'editExercise' && data) {
            const editExerciseData = data as EditExerciseDataTypes

            const credentials: EditExerciseServiceProps = {
                id: editExerciseData.id as number,
                name: editExerciseData.name,
                description: editExerciseData.description,
                routine_ids: editExerciseData.routine_ids
            }

            await PostPutDataService.EditExerciseService(credentials)

            behavior()
            toast.success('! Ejercicio actualizado ! 🎉')
            toggleModalEditExercise()
        }

        else if (action === 'addRoutine' && data) {

            const AddRoutineData = data as AddRoutineDataTypes

            const userData = JSON.parse(window.localStorage.getItem('user') || '{}');

            const { hasRoutine } = await GetDataService.checkHasRoutine(AddRoutineData.patient_id?.toString() as string)

            if (hasRoutine !== false) {
                alreadyHasRoutineError()
                return
            }

            const credentials = {
                name: AddRoutineData.name,
                description: AddRoutineData.description,
                estimatedTime: AddRoutineData.estimatedTime,
                user_id: userData.id as number,
                patient_id: AddRoutineData.patient_id
            }

            await PostPutDataService.AddRoutineService(credentials)

            behavior()
            toast.success('Rutina añadida con éxito')
            toggleModalAddRoutine()
        }
        else if (action === 'addExerciseToRoutine' && data) {
            const AddExerciseToRoutineData = data as AddExerciseToRoutineDataTypes

            const credentials = {
                name: AddExerciseToRoutineData.name,
                description: AddExerciseToRoutineData.description,
                routine_name: AddExerciseToRoutineData.routine_name
            }


            await PostPutDataService.AddExerciseToRoutineService(credentials)
            behavior()
            toast.success('Ejercicio añadido con éxito')
            toggleModalAddExerciseToRoutine()
        }
        else if (action === 'deleteRoutine') {
            await DeleteDataService.deleteRoutine(data as number)
            behavior()
            toast.success('Rutina eliminada con éxito')
            toggleModalDeleteRoutine()
        }

        else if (action === 'deleteExercise') {
            await DeleteDataService.deleteExercise(data as number)
            behavior()
            toast.success('Ejercicio eliminado con éxito')
            toggleModalDeleteExercise()
        }
        else {
            handleClose(event)
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
                    <Button type="submit" className={theme === 'dark' ? 'save-modal' : 'save-modal2'} variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalWindow