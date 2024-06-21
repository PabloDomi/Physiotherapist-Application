import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"
import { AddExerciseToRoutineDataTypes, RoutineData } from "../utils/types"

export function useAddExerciseToRoutine(listRoutines: RoutineData[] | undefined) {

    const theme = useGlobalState(state => state.theme)

    const showModalAddExerciseToRoutine = useGlobalState(state => state.showAddExerciseToRoutineModal)
    const toggleModalAddExerciseToRoutine = useGlobalState(state => state.toggleAddExerciseToRoutineModal)

    const modalTitleAddExerciseToRoutine = 'Agregar Ejercicio a Rutina'

    const [AddExerciseToRoutineData, setAddExerciseToRoutineData] = useState<AddExerciseToRoutineDataTypes | null>(null)

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
                <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la rutina a la que agregar este ejercicio</Form.Label>
                <Form.Select
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
                    {listRoutines?.map((routine, index) => {
                        return <option key={index} value={routine.name}>{routine.name}</option>
                    })}
                </Form.Select>
            </Form.Group>
        </Form>

    return { showModalAddExerciseToRoutine, toggleModalAddExerciseToRoutine, modalTitleAddExerciseToRoutine, modalContentAddExerciseToRoutine, theme, AddExerciseToRoutineData }
}

export default useAddExerciseToRoutine
