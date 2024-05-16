import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useState } from "react"
import { DeleteRoutineDataTypes } from "../utils/types"


export function useDeleteRoutine() {

    const theme = useGlobalState(state => state.theme)

    const showModalDeleteRoutine = useGlobalState(state => state.showDeleteRoutineModal)
    const toggleModalDeleteRoutine = useGlobalState(state => state.toggleDeleteRoutineModal)

    const globalRoutines = useGlobalState(state => state.routines)

    const modalTitleDeleteRoutine = 'Eliminar Rutina'

    const [DeleteRoutineData, setDeleteRoutineData] = useState<DeleteRoutineDataTypes | undefined>(undefined)

    const modalContentDeleteRoutine =
        <>
            <Form>
                <Form.Group className="mb-3" controlId="DeleteRoutineForm.Select1" onClick={(event) => event.stopPropagation()}>
                    <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la rutina a eliminar</Form.Label>
                    <Form.Select
                        style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                        onChange={(event) => {
                            event.stopPropagation()
                            setDeleteRoutineData(
                                {
                                    routine_id: Number(event.target.value)
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



    return { showModalDeleteRoutine, toggleModalDeleteRoutine, modalTitleDeleteRoutine, modalContentDeleteRoutine, DeleteRoutineData }
}

export default useDeleteRoutine
