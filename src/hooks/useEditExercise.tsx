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

    const routines = useGlobalState(state => state.routines)

    const modalTitleEditExercise = 'Editar ejercicio'

    const [EditExerciseData, setEditExerciseData] = useState<EditExerciseDataTypes | undefined>(
        {
            id: exercise?.id,
            name: exercise?.name,
            description: exercise?.description,
            routine_ids: Array.isArray(exercise?.routine_ids) ? exercise.routine_ids : [],
            routine: Array.isArray(exercise?.routine) ? exercise?.routine : []
        }
    )

    const updateExerciseData = useCallback((exercise: Exercise) => {

        setEditExerciseData(
            {
                id: exercise.id,
                name: exercise.name,
                description: exercise.description,
                routine_ids: Array.isArray(exercise?.routine_ids) ? exercise.routine_ids : [],
                routine: Array.isArray(exercise.routine) ? exercise.routine : []
            }
        )
    }, []);

    useEffect(() => {
        if (exercise)
            updateExerciseData(exercise)
    }, [exercise, updateExerciseData])


    const routineOfExercises = () => {
        if (exercise?.routine && Array.isArray(exercise.routine)) {

            const arrayOfRoutines: RoutineData[] | undefined = []

            const routineIds: number[] = exercise.routine_ids

            exercise.routine.forEach(element => {
                if (exercise?.routine_ids) {
                    if (routineIds.includes(element.id))
                        arrayOfRoutines?.push(element)
                }
            })

            return arrayOfRoutines as RoutineData[]
        } else {
            return []
        }

    }

    const getRoutinesNotWithExercise = () => {

        const routinesNotWithExercise = routines?.filter((r) => {
            return !routineOfExercises().some(rutina => rutina.id === r.id)
        })

        return routinesNotWithExercise?.map((routine, index) => {
            return <li style={{ margin: '0.2rem' }} key={index}>
                <Form.Check.Input
                    style={{ margin: '0.3rem', marginRight: '0.5rem' }}
                    key={index}
                    type="checkbox"
                    defaultChecked={false}
                    value={routine.id}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.checked === true) {
                            isChecked(routine)
                        } else {
                            isUnchecked(routine)
                        }
                    }}
                >
                </Form.Check.Input>
                <Form.Check.Label>
                    {routine.name}
                </Form.Check.Label>
            </li>
        })
    }

    const isChecked = (routine: RoutineData) => {
        EditExerciseData?.routine_ids?.push(routine.id)
    }

    const isUnchecked = (routine: RoutineData) => {
        const index = EditExerciseData?.routine_ids?.indexOf(routine.id)
        if (index !== undefined) {
            EditExerciseData?.routine_ids?.splice(index, 1)
        }
    }

    const modalContentEditExercise =
        <>
            {!exercise &&
                <Form>
                    <Form.Group className="mb-3" controlId="EditExerciseForm.Select1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione el ejercicio a editar</Form.Label>
                        <Form.Select
                            onChange={(event) => {
                                event.stopPropagation()
                                GetDataService.getExerciseById(event.target.value)
                                    .then((res) => {
                                        setExercise(Object(res))
                                    })
                            }}
                            autoFocus
                            aria-label="Default select"
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        >
                            <option>Seleccione un ejercicio</option>
                            {globalExercises?.map((exercise, index) => {
                                return <option key={index} value={exercise.id}>{exercise.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
            }
            {exercise &&
                <Form>
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
                        <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione a que rutinas agregar el ejercicio</Form.Label>
                        <Form.Check
                            type={"checkbox"}
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditExerciseData({
                                    ...(EditExerciseData as EditExerciseDataTypes),
                                    routine_ids: exercise?.routine_ids ? [...exercise.routine_ids, Number(event.target.value)] : [Number(event.target.value)]
                                })
                            }}
                            autoFocus
                            aria-label="Default select"
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        >
                            <ul style={{ marginBottom: '0px' }}>
                                {
                                    routineOfExercises().map((r, index) => {
                                        return <li style={{ margin: '0.2rem' }} key={index}>
                                            <Form.Check.Input
                                                style={{ margin: '0.3rem', marginRight: '0.5rem' }}
                                                type="checkbox"
                                                defaultChecked={true}
                                                value={r.id}
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                    if (event.target.checked === true) {
                                                        isChecked(r)
                                                    } else {
                                                        isUnchecked(r)
                                                    }
                                                }}
                                            >
                                            </Form.Check.Input>
                                            <Form.Check.Label>
                                                {r.name}
                                            </Form.Check.Label>
                                        </li>
                                    })
                                }
                            </ul>
                            <ul>
                                {getRoutinesNotWithExercise()}
                            </ul>
                        </Form.Check>
                    </Form.Group>
                </Form>
            }
        </>


    return { showModalEditExercise, toggleModalEditExercise, modalTitleEditExercise, modalContentEditExercise, EditExerciseData, setExercise }
}

export default useEditExercise
