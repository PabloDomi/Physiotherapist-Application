import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useEffect, useState } from "react"
import { ManageTabletsDataTypes, TabletsTypes } from "../utils/types"
import GetDataService from "../services/GetDataService"

export function useManageTablets() {

    const theme = useGlobalState(state => state.theme)
    const patients = useGlobalState(state => state.patients)

    const showModalManageTablets = useGlobalState(state => state.showManageTabletsModal)
    const toggleModalManageTablets = useGlobalState(state => state.toggleManageTabletsModal)

    const [operation, setOperation] = useState('');
    const [tablets, setTablets] = useState<TabletsTypes[]>([])
    const [showForm, setShowForm] = useState<boolean>(false)

    useEffect(() => {
        GetDataService.getTablets().then((data) => {
            setTablets(data)
        })
    }, [])

    const modalTitleManageTablets = 'Administración de Tablets'

    const handleAction = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOperation((event.target.value))
        setShowForm(true)
    }

    const [manageTabletsData, setManageTabletsData] = useState<ManageTabletsDataTypes | null>({
        patient_id: 0,
        tablet_id: 0,
        treatment_time: 0,
        treatment_cadence: 0,
        operation: 'create'
    })

    const modalContentManageTablets =
        <>
            <Form>
                <Form.Group className="mb-3" controlId="manageTabletsForm.ControlInput5">
                    <Form.Label>Seleccione acción</Form.Label>
                    <Form.Select
                        onChange={handleAction}
                        autoFocus
                        aria-label="Default select"
                        className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                    >
                        <option value="select">Seleccione una acción</option>
                        <option value="delete">Borrar tablet</option>
                        <option value="update">Actualizar tablet existente</option>
                        <option value="create">Añadir nueva tablet al sistema</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Form>
                {operation !== 'create' && (
                    <>
                        <Form.Group className="mb-3" controlId="manageTabletsForm.ControlInput2">
                            <Form.Label>Seleccione el número de tablet para la acción</Form.Label>
                            <Form.Select
                                onChange={(event) => setManageTabletsData({
                                    patient_id: manageTabletsData?.patient_id,
                                    tablet_id: Number(event.target.value),
                                    treatment_time: manageTabletsData?.treatment_time,
                                    treatment_cadence: manageTabletsData?.treatment_cadence,
                                    operation: operation
                                })}
                                autoFocus
                                className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                            >
                                {tablets.map((tablet, index) => {
                                    return <option key={index} value={tablet.id}>{tablet.id}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </>
                )}
                {showForm && operation !== 'delete' &&
                    <>
                        <Form.Group className="mb-3" controlId="manageTabletsForm.ControlInput1">
                            <Form.Label>Paciente al que asociar la tablet</Form.Label>
                            <Form.Select
                                onChange={(event) => setManageTabletsData({
                                    patient_id: Number(event.target.value),
                                    tablet_id: manageTabletsData?.tablet_id,
                                    treatment_time: manageTabletsData?.treatment_time,
                                    treatment_cadence: manageTabletsData?.treatment_cadence,
                                    operation: operation
                                })}
                                autoFocus
                                className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                            >
                                <option value="select">Seleccione un paciente</option>
                                {operation === 'update' &&
                                    patients?.filter(patient => patient.id === tablets.find(tablet => tablet.id === manageTabletsData?.tablet_id)?.patient_id)?.map((patient, index) => {
                                        return <option key={index} value={patient.id}>{patient.name + ' ' + patient.surname}</option>
                                    })}
                                {patients?.filter(patient => !tablets.some(tablet => tablet.patient_id === patient.id))?.map((patient, index) => {
                                    return <option key={index} value={patient.id}>{patient.name + ' ' + patient.surname}</option>
                                })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="manageTabletsForm.ControlInput3"
                        >
                            <Form.Label>Duración del tratamiento (en días)</Form.Label>
                            <Form.Control
                                onChange={(event) => setManageTabletsData({
                                    patient_id: manageTabletsData?.patient_id,
                                    tablet_id: manageTabletsData?.tablet_id,
                                    treatment_time: Number(event.target.value),
                                    treatment_cadence: manageTabletsData?.treatment_cadence,
                                    operation: operation
                                })}
                                type="number"
                                placeholder="Duración del tratamiento en días"
                                className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="manageTabletsForm.ControlInput4"
                        >
                            <Form.Label>Cadencia semanal del tratamiento (días por semana)</Form.Label>
                            <Form.Control
                                onChange={(event) => setManageTabletsData({
                                    patient_id: manageTabletsData?.patient_id,
                                    tablet_id: manageTabletsData?.tablet_id,
                                    treatment_time: manageTabletsData?.treatment_time,
                                    treatment_cadence: Number(event.target.value),
                                    operation: operation
                                })}
                                type="number"
                                placeholder="Cadencia semanal del tratamiento en días por semana"
                                className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                            />
                        </Form.Group>
                    </>
                }
            </Form>
        </>

    return { setTablets, showModalManageTablets, toggleModalManageTablets, modalTitleManageTablets, modalContentManageTablets, theme, manageTabletsData }
}

export default useManageTablets
