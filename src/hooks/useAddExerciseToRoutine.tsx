import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"
import { AddExerciseToRoutineDataTypes } from "../utils/types"

export function useAddExerciseToRoutine(routineName: string) {

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
                            routine_name: routineName
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
                            routine_name: routineName
                        }
                    )}
                    type="text"
                    placeholder="Descripción del ejercicio"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                />
            </Form.Group>
        </Form>

    return { showModalAddExerciseToRoutine, toggleModalAddExerciseToRoutine, modalTitleAddExerciseToRoutine, modalContentAddExerciseToRoutine, theme, AddExerciseToRoutineData }
}

export default useAddExerciseToRoutine
