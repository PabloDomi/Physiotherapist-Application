import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useEffect, useState } from "react"
import { AddExerciseToRoutineDataTypes, RoutineData } from "../utils/types"
import GetDataService from "../services/GetDataService"

export function useAddExerciseToRoutine() {

    const theme = useGlobalState(state => state.theme)

    const showModalAddExerciseToRoutine = useGlobalState(state => state.showAddExerciseToRoutineModal)
    const toggleModalAddExerciseToRoutine = useGlobalState(state => state.toggleAddExerciseToRoutineModal)

    const modalTitleAddExerciseToRoutine = 'Agregar Ejercicio a Rutina'

    const [AddExerciseToRoutineData, setAddExerciseToRoutineData] = useState<AddExerciseToRoutineDataTypes | null>(null)
    const [routines, setRoutines] = useState<RoutineData[] | null>(null)

    useEffect(() => {
        GetDataService.getRoutines().then(res => setRoutines(res))
    }, [])

    const modalContentAddExerciseToRoutine =
        <Form>
            <Form.Group className="mb-3" controlId="AddExerciseToRoutineForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    onChange={(event) => setAddExerciseToRoutineData(
                        {
                            name: event.target.value,
                            description: AddExerciseToRoutineData?.description,
                            routine_name: AddExerciseToRoutineData?.routine_name
                        }
                    )}
                    type="text"
                    placeholder="Ingrese el nombre del ejercicio"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddExerciseToRoutineForm.ControlInput2">
                <Form.Label>Descripción del Ejercicio</Form.Label>
                <Form.Control
                    onChange={(event) => setAddExerciseToRoutineData(
                        {
                            name: AddExerciseToRoutineData?.name,
                            description: event.target.value,
                            routine_name: AddExerciseToRoutineData?.routine_name
                        }
                    )}
                    type="text"
                    placeholder="Descripción del ejercicio"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddExerciseToRoutineForm.Select1">
                <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione el paciente para la rutina</Form.Label>
                <Form.Select
                    style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                    onChange={(event) => setAddExerciseToRoutineData(
                        {
                            name: AddExerciseToRoutineData?.name,
                            description: AddExerciseToRoutineData?.description,
                            routine_name: event.target.value
                        }
                    )}
                    autoFocus
                    aria-label="Default select"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                >
                    <option>Seleccione la rutina</option>
                    {routines?.map((routine, index) => {
                        return <option key={index} value={routine.name}>{routine.name}</option>
                    })}
                </Form.Select>
            </Form.Group>
        </Form>

    return { showModalAddExerciseToRoutine, toggleModalAddExerciseToRoutine, modalTitleAddExerciseToRoutine, modalContentAddExerciseToRoutine, theme, AddExerciseToRoutineData }
}

export default useAddExerciseToRoutine
