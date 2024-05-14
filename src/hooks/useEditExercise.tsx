import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useCallback, useEffect, useState } from "react"
import { EditExerciseDataTypes, Exercise, RoutineData } from "../utils/types"
import GetDataService from "../services/GetDataService"

export function useEditExercise() {

    const theme = useGlobalState(state => state.theme)

    const showModalEditExercise = useGlobalState(state => state.showEditExerciseModal)
    const toggleModalEditExercise = useGlobalState(state => state.toggleEditExerciseModal)
    const globalExercises = useGlobalState(state => state.exercises)

    const [exercise, setExercise] = useState<Exercise | undefined>(undefined)

    const patients = useGlobalState(state => state.patients)

    const modalTitleEditExercise = 'Actualizar Rutina'

    const [EditExerciseData, setEditExerciseData] = useState<EditExerciseDataTypes | undefined>(
        {
            id: exercise?.id,
            name: exercise?.name,
            description: exercise?.description,
            routine_ids: exercise?.routine_ids,
            routine: exercise?.routine
        }
    )

    const updateExerciseData = useCallback((exercise: Exercise) => {

        setEditExerciseData(
            {
                id: exercise.id,
                name: exercise.name,
                description: exercise.description,
                routine_ids: Array(Number(exercise)),
                routine: exercise.routine as RoutineData
            }
        )
    }, []);

    useEffect(() => {
        if (exercise)
            updateExerciseData(exercise)
    }, [exercise, updateExerciseData])

    const modalContentEditExercise =
        <>
            {!exercise &&
                <Form>
                    <Form.Group className="mb-3" controlId="EditExerciseForm.Select1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la rutina a actualizar</Form.Label>
                        <Form.Select
                            style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                            onChange={(event) => {
                                event.stopPropagation()
                                GetDataService.getExerciseById(Number(event.target.value))
                                    .then((res) => {
                                        setExercise(Object(res))
                                    })
                            }}
                            autoFocus
                            aria-label="Default select"
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        >
                            <option>Seleccione la rutina a actualizar</option>
                            {globalExercises?.map((exercise, index) => {
                                return <option key={index} value={exercise.id}>{exercise.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
            }
            {exercise &&
                <Form>
                    <Form.Group className="mb-3" controlId="EditExerciseForm.ControlInput1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditExerciseData(
                                    {
                                        ...(EditExerciseData as EditExerciseDataTypes),
                                        name: event.target.value
                                    }
                                )
                            }}
                            defaultValue={exercise?.name}
                            type="text"
                            placeholder='Nombre de la rutina'
                            autoFocus
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="EditExerciseForm.ControlInput2" onClick={(event) => event.stopPropagation()}>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditExerciseData(
                                    {
                                        ...(EditExerciseData as EditExerciseDataTypes),
                                        description: event.target.value
                                    }
                                )
                            }}
                            type="text"
                            defaultValue={exercise?.description}
                            placeholder='Descripción de la rutina'
                            autoFocus
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="EditExerciseForm.Select1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la o las rutinas para agregar el ejercicio</Form.Label>
                        <Form.Select
                            multiple
                            style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditExerciseData(
                                    {
                                        ...(EditExerciseData as EditExerciseDataTypes),
                                        routine: (event.target.value as unknown) as RoutineData
                                    }
                                )
                            }}
                            autoFocus
                            aria-label="Default select"
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        >
                            <option
                                key={exercise?.routine?.name}
                                value={exercise?.routine?.name}
                            >
                                { }
                            </option>
                            {patients?.map((patient, index) => {
                                return <option key={index} value={patient.id}>{patient.name + ' ' + patient.surname}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
            }
        </>


    return { showModalEditExercise, toggleModalEditExercise, modalTitleEditExercise, modalContentEditExercise, EditExerciseData }
}

export default useEditExercise
