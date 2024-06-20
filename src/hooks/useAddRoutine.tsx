import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"
import { AddRoutineDataTypes } from "../utils/types"
import '../css/Navbar.css'

export function useAddRoutine() {

    const theme = useGlobalState(state => state.theme)

    const showModalAddRoutine = useGlobalState(state => state.showAddRoutineModal)
    const toggleModalAddRoutine = useGlobalState(state => state.toggleAddRoutineModal)

    const patients = useGlobalState(state => state.patients)

    const modalTitleAddRoutine = 'Agregar Rutina'

    const [AddRoutineData, setAddRoutineData] = useState<AddRoutineDataTypes | undefined>(undefined)

    const modalContentAddRoutine =
        <Form>
            <Form.Group className="mb-3" controlId="AddRoutineForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    onChange={(event) => setAddRoutineData(
                        {
                            name: event.target.value,
                            description: AddRoutineData?.description,
                            estimatedTime: AddRoutineData?.estimatedTime,
                            patient_id: AddRoutineData?.patient_id
                        }
                    )}
                    type="text"
                    placeholder="Ingrese el nombre de la rutina"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddRoutineForm.ControlInput2">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    onChange={(event) => setAddRoutineData(
                        {
                            name: AddRoutineData?.name,
                            description: event.target.value,
                            estimatedTime: AddRoutineData?.estimatedTime,
                            patient_id: AddRoutineData?.patient_id
                        }
                    )}
                    type="text"
                    placeholder="Describa brevemente la rutina"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="AddRoutineForm.ControlInput3"
            >
                <Form.Label>Tiempo estimado para completar la rutina</Form.Label>
                <Form.Control
                    onChange={(event) => setAddRoutineData(
                        {
                            name: AddRoutineData?.name,
                            description: AddRoutineData?.description,
                            estimatedTime: Number(event.target.value),
                            patient_id: AddRoutineData?.patient_id
                        }
                    )}
                    type="text"
                    placeholder="Ingrese el tiempo estimado en minutos"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddRoutineForm.Select1">
                <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione el paciente para la rutina</Form.Label>
                <Form.Select
                    onChange={(event) => setAddRoutineData(
                        {
                            name: AddRoutineData?.name,
                            description: AddRoutineData?.description,
                            estimatedTime: AddRoutineData?.estimatedTime,
                            patient_id: Number(event.target.value)
                        }
                    )}
                    autoFocus
                    aria-label="Default select"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                >
                    <option>Seleccione el paciente al que añadirle la rutina</option>
                    {patients?.map((patient, index) => {
                        return <option key={index} value={patient.id}>{patient.name + ' ' + patient.surname}</option>
                    })}
                </Form.Select>
            </Form.Group>
        </Form>



    return { showModalAddRoutine, toggleModalAddRoutine, modalTitleAddRoutine, modalContentAddRoutine, theme, AddRoutineData }
}

export default useAddRoutine
