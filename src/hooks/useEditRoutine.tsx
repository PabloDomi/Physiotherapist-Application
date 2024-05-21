import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useCallback, useEffect, useState } from "react"
import { EditRoutineDataTypes, RoutineData } from "../utils/types"
import GetDataService from "../services/GetDataService"
import { Toaster, toast } from "sonner"

export function useEditRoutine() {

    const theme = useGlobalState(state => state.theme)

    const showModalEditRoutine = useGlobalState(state => state.showEditRoutineModal)
    const toggleModalEditRoutine = useGlobalState(state => state.toggleEditRoutineModal)
    const globalRoutines = useGlobalState(state => state.routines)

    const [rutina, setRutina] = useState<RoutineData | undefined>(undefined)

    const patients = useGlobalState(state => state.patients)

    const modalTitleEditRoutine = 'Actualizar Rutina'

    const [EditRoutineData, setEditRoutineData] = useState<EditRoutineDataTypes | undefined>(
        {
            routine_id: rutina?.id,
            name: rutina?.name,
            description: rutina?.description,
            estimatedTime: rutina?.estimatedTime,
            patient_id: rutina?.patient_id
        }
    )

    const updateRoutineData = useCallback((rutina: RoutineData) => {

        setEditRoutineData(
            {
                routine_id: rutina.id,
                name: rutina.name,
                description: rutina.description,
                estimatedTime: rutina.estimatedTime,
                patient_id: rutina.patient_id
            }
        )
    }, []);

    useEffect(() => {
        if (rutina)
            updateRoutineData(rutina)
    }, [rutina, updateRoutineData])

    const modalContentEditRoutine =
        <>
            {!rutina &&
                <Form>
                    <Form.Group className="mb-3" controlId="EditRoutineForm.Select1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione la rutina a actualizar</Form.Label>
                        <Form.Select
                            style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                            onChange={(event) => {
                                event.stopPropagation()
                                GetDataService.getRoutineById(Number(event.target.value))
                                    .then((res) => {
                                        setRutina(Object(res))
                                    })
                            }}
                            autoFocus
                            aria-label="Default select"
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        >
                            <option>Seleccione la rutina a actualizar</option>
                            {globalRoutines?.map((routine, index) => {
                                return <option key={index} value={routine.id}>{routine.name}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
            }
            {rutina &&
                <Form>
                    <Form.Group className="mb-3" controlId="EditRoutineForm.ControlInput1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditRoutineData(
                                    {
                                        ...(EditRoutineData as EditRoutineDataTypes),
                                        name: event.target.value
                                    }
                                )
                            }}
                            defaultValue={rutina?.name}
                            type="text"
                            placeholder='Nombre de la rutina'
                            autoFocus
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="EditRoutineForm.ControlInput2" onClick={(event) => event.stopPropagation()}>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditRoutineData(
                                    {
                                        ...(EditRoutineData as EditRoutineDataTypes),
                                        description: event.target.value
                                    }
                                )
                            }}
                            type="text"
                            defaultValue={rutina?.description}
                            placeholder='Descripción de la rutina'
                            autoFocus
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="EditRoutineForm.ControlInput3"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Form.Label>Tiempo estimado para completar la rutina</Form.Label>
                        <Form.Control
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditRoutineData(
                                    {
                                        ...(EditRoutineData as EditRoutineDataTypes),
                                        estimatedTime: Number(event.target.value)
                                    }
                                )
                            }}
                            type="text"
                            defaultValue={rutina?.estimatedTime}
                            placeholder='Tiempo estimado en minutos'
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="EditRoutineForm.Select1" onClick={(event) => event.stopPropagation()}>
                        <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione el paciente para la rutina actualizada</Form.Label>
                        <Form.Select
                            style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                            onChange={(event) => {
                                event.stopPropagation()
                                setEditRoutineData(
                                    {
                                        ...(EditRoutineData as EditRoutineDataTypes),
                                        patient_id: Number(event.target.value)
                                    }
                                )
                            }}
                            autoFocus
                            aria-label="Default select"
                            className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                        >
                            <option
                                key={rutina?.patient_id}
                                value={rutina?.patient_id}
                            >
                                {patients?.find((p) => p.id === rutina?.patient_id)?.name + ' ' + patients?.find((p) => p.id === rutina?.patient_id)?.surname}
                            </option>
                            {patients?.filter((p) => p.id !== rutina?.patient_id)?.map((patient, index) => {
                                return <option key={index} value={patient.id}>{patient.name + ' ' + patient.surname}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Toaster />
                </Form>
            }
        </>

    if (
        EditRoutineData?.patient_id !== rutina?.patient_id &&
        EditRoutineData?.patient_id?.toString() !== undefined &&
        rutina?.patient_id !== undefined
    ) {
        try {
            GetDataService.checkHasRoutine(EditRoutineData?.patient_id)
                .then(({ hasRoutine }) => {
                    if (hasRoutine) {
                        toast.error('El paciente ya tiene una rutina asignada')
                        return
                    }
                })
        } catch (error) {
            console.error(error)
            throw new Error("Error al obtener los pacientes")
        }
    }


    return { showModalEditRoutine, toggleModalEditRoutine, modalTitleEditRoutine, modalContentEditRoutine, EditRoutineData, setRutina }
}

export default useEditRoutine
