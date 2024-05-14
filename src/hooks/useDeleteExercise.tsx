import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"
import { DeleteExerciseDataTypes } from "../utils/types"


export function useDeleteExercise() {

    const theme = useGlobalState(state => state.theme)

    const showModalDeleteExercise = useGlobalState(state => state.showDeleteExerciseModal)
    const toggleModalDeleteExercise = useGlobalState(state => state.toggleDeleteExerciseModal)

    const globalRoutines = useGlobalState(state => state.routines)

    const modalTitleDeleteExercise = 'Eliminar Rutina'

    const [DeleteExerciseData, setDeleteExerciseData] = useState<DeleteExerciseDataTypes | undefined>(undefined)

    const modalContentDeleteExercise =
        <>
            <Form>
                <Form.Group className="mb-3" controlId="DeleteExerciseForm.Select1" onClick={(event) => event.stopPropagation()}>
                    <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la rutina a eliminar</Form.Label>
                    <Form.Select
                        style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                        onChange={(event) => {
                            event.stopPropagation()
                            setDeleteExerciseData(
                                {
                                    exercise_id: Number(event.target.value)
                                }
                            )
                        }}
                        autoFocus
                        aria-label="Default select"
                        className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                    >
                        <option>Seleccione la rutina a eliminar</option>
                        {globalRoutines?.map((routine, index) => {
                            return <option key={index} value={routine.id}>{routine.name}</option>
                        })}
                    </Form.Select>
                </Form.Group>
            </Form>
        </>



    return { showModalDeleteExercise, toggleModalDeleteExercise, modalTitleDeleteExercise, modalContentDeleteExercise, DeleteExerciseData }
}

export default useDeleteExercise
