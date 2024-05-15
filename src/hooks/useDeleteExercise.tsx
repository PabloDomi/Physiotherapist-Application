import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"


export function useDeleteExercise() {

    const theme = useGlobalState(state => state.theme)

    const showModalDeleteExercise = useGlobalState(state => state.showDeleteExerciseModal)
    const toggleModalDeleteExercise = useGlobalState(state => state.toggleDeleteExerciseModal)

    const globalExercises = useGlobalState(state => state.exercises)

    const modalTitleDeleteExercise = 'Eliminar ejercicio'

    const [DeleteExerciseData, setDeleteExerciseData] = useState<number | undefined>(undefined)

    const modalContentDeleteExercise =
        <>
            <Form>
                <Form.Group className="mb-3" controlId="DeleteExerciseForm.Select1" onClick={(event) => event.stopPropagation()}>
                    <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la ejercicio a eliminar</Form.Label>
                    <Form.Select
                        style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                        onChange={(event) => {
                            event.stopPropagation()
                            setDeleteExerciseData(Number(event.target.value))
                        }}
                        autoFocus
                        aria-label="Default select"
                        className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                    >
                        <option>Seleccione el ejercicio a eliminar</option>
                        {globalExercises?.map((exercise, index) => {
                            return <option key={index} value={exercise.id}>{exercise.name}</option>
                        })}
                    </Form.Select>
                </Form.Group>
            </Form>
        </>



    return { showModalDeleteExercise, toggleModalDeleteExercise, modalTitleDeleteExercise, modalContentDeleteExercise, DeleteExerciseData }
}

export default useDeleteExercise
