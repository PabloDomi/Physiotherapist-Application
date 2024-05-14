import { Button, List } from "@mui/material";
import '../css/Rutinas.css';
import { useGlobalState } from "../store/useGlobalState";
import ListExpandRoutines from "../components/ListExpandRoutines";
import { usePatients } from "../hooks/usePatients";
import Loader from "../components/Loader";
import ModalWindow from "../components/Modal";
import useAddRoutine from "../hooks/useAddRoutine";
import GetDataService from "../services/GetDataService";
import useAddExerciseToRoutine from "../hooks/useAddExerciseToRoutine"
import useEditRoutine from "../hooks/useEditRoutine";
import { DeleteOutline, EditOutlined, AccessibilityNewOutlined, FitnessCenterOutlined } from "@mui/icons-material";
import useDeleteRoutine from "../hooks/useDeleteRoutine";


export const Rutinas = () => {

    const theme = useGlobalState(state => state.theme)
    const { isLoading } = usePatients()
    const setGlobalRoutines = useGlobalState(state => state.setRoutines)
    const globalRoutines = useGlobalState(state => state.routines)

    const {
        showModalAddRoutine,
        toggleModalAddRoutine,
        modalTitleAddRoutine,
        modalContentAddRoutine,
        AddRoutineData
    } = useAddRoutine()

    const refetchRoutinesData = async () => {
        try {
            const res = await GetDataService.getRoutines()
            setGlobalRoutines(res)
            setGlobalRoutines(res)
        } catch (error) {
            console.error(error)
            throw new Error("Error al obtener los pacientes")
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        refetchRoutinesData()
        toggleModalAddRoutine()
    }


    const {
        showModalAddExerciseToRoutine,
        toggleModalAddExerciseToRoutine,
        modalTitleAddExerciseToRoutine,
        modalContentAddExerciseToRoutine,
        AddExerciseToRoutineData
    } = useAddExerciseToRoutine(globalRoutines)


    const {
        showModalDeleteRoutine,
        toggleModalDeleteRoutine,
        modalTitleDeleteRoutine,
        modalContentDeleteRoutine,
        DeleteRoutineData
    } = useDeleteRoutine()

    const {
        showModalEditRoutine,
        toggleModalEditRoutine,
        modalTitleEditRoutine,
        modalContentEditRoutine,
        EditRoutineData
    } = useEditRoutine()


    const handleDeleteRoutineClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        toggleModalDeleteRoutine()
    }

    const refetchRoutines = () => {
        if (globalRoutines) {
            const newRoutines = globalRoutines.filter((r) => r.id !== DeleteRoutineData?.routine_id)
            setGlobalRoutines(newRoutines)
        }
    }

    const handleEditRoutineClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        toggleModalEditRoutine()
    }


    const handleClickAddRoutine = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModalAddExerciseToRoutine()
    }

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                <section className={theme === 'light' ? 'rutinas-section rutinas-background-light' : 'rutinas-section-dark rutinas-background-dark'}>
                    <h1>Lista de Rutinas</h1>
                    <main className="rutinas-container">
                        <List
                            sx={{
                                background: theme === 'dark' ? 'linear-gradient(270deg, #262726, #3b3c3b)' : 'linear-gradient(90deg, #A1e1a1, #67c467)',
                            }}
                            component="nav"
                            id="rutinas-list"
                        >
                            {globalRoutines?.map((routine, index) =>
                                <ListExpandRoutines key={index} rutina={routine} rutinas={globalRoutines} setRoutines={setGlobalRoutines} componentId={index} />
                            )}
                        </List>
                    </main>
                    <aside className="rutinas-aside">
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            className={theme === 'light' ? 'btn-agregar-rutina-light' : 'btn-agregar-rutina'}
                        >
                            Agregar Rutina
                            <FitnessCenterOutlined className="iconos-rutinas" />
                        </Button>
                        {showModalAddRoutine &&
                            <ModalWindow
                                show={showModalAddRoutine}
                                title={modalTitleAddRoutine}
                                content={modalContentAddRoutine}
                                action='addRoutine'
                                data={AddRoutineData}
                                behavior={refetchRoutinesData}
                            >
                            </ModalWindow>
                        }
                        <Button
                            id={theme === 'light' ? 'btn-agregar-ej-light' : 'btn-agregar-ej'}
                            variant="contained"
                            onClick={handleClickAddRoutine}
                        >
                            Añadir Ejercicio a Rutina
                            <AccessibilityNewOutlined className="iconos-rutinas" />
                        </Button>
                        {showModalAddExerciseToRoutine &&
                            <ModalWindow
                                show={showModalAddExerciseToRoutine}
                                title={modalTitleAddExerciseToRoutine}
                                content={modalContentAddExerciseToRoutine}
                                action='addExerciseToRoutine'
                                data={AddExerciseToRoutineData}
                                behavior={() => { }}
                            >
                            </ModalWindow>
                        }
                        <Button
                            onClick={handleEditRoutineClick}
                            id={theme === 'light' ? 'btn-lista-light' : 'btn-lista-dark'}
                            variant="contained"
                        >
                            Edit Routine
                            <EditOutlined className="iconos-rutinas" />
                        </Button>
                        {showModalEditRoutine &&
                            <ModalWindow
                                show={showModalEditRoutine}
                                title={modalTitleEditRoutine}
                                content={modalContentEditRoutine}
                                action='editRoutine'
                                data={EditRoutineData}
                                behavior={() => { }}
                            />
                        }
                        <Button
                            onClick={handleDeleteRoutineClick}
                            id={theme === 'light' ? 'btn-lista-light' : 'btn-lista-dark'}
                            variant="contained"
                        >
                            Delete Routine
                            <DeleteOutline className="iconos-rutinas" />
                        </Button>
                        {showModalDeleteRoutine &&
                            <ModalWindow
                                show={showModalDeleteRoutine}
                                title={modalTitleDeleteRoutine}
                                content={modalContentDeleteRoutine}
                                action='deleteRoutine'
                                data={DeleteRoutineData?.routine_id}
                                behavior={refetchRoutines}
                            />
                        }
                    </aside>
                </section >
            }
        </>
    )
}