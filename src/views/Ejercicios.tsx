import { Button, List } from "@mui/material";
import '../css/Ejercicios.css';
import { useGlobalState } from "../store/useGlobalState";
import { usePatients } from "../hooks/usePatients";
import ListExpandExercisesCustom from "../components/ListExpandExercisesCustom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import useEditExercise from "../hooks/useEditExercise";
import ModalWindow from "../components/Modal";
import useDeleteExercise from "../hooks/useDeleteExercise";

const Ejercicios = () => {

    const theme = useGlobalState(state => state.theme)
    const { isLoading } = usePatients()

    const routines = useGlobalState(state => state.routines)

    const globalExercises = routines?.flatMap((routine) => routine.exercises);
    const setGlobalExercises = useGlobalState(state => state.setExercises)

    const {
        showModalEditExercise,
        toggleModalEditExercise,
        modalTitleEditExercise,
        modalContentEditExercise,
        EditExerciseData
    } = useEditExercise()

    const {
        showModalDeleteExercise,
        toggleModalDeleteExercise,
        modalTitleDeleteExercise,
        modalContentDeleteExercise,
        DeleteExerciseData
    } = useDeleteExercise()

    const refetchExercisesData = async () => {
        if (globalExercises) {
            const newExercises = globalExercises.filter((r) => r.id !== DeleteExerciseData)
            setGlobalExercises(newExercises)
        }
    }

    return (
        <>
            {isLoading &&
                <div className="text-center text-success mt-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {!isLoading &&
                <section className={theme === 'light' ? 'rutinas-section rutinas-background-light' : 'rutinas-section rutinas-background-dark'}>
                    <h1>Lista de Ejercicios</h1>
                    <main className="rutinas-container">
                        <List
                            sx={{
                                width: '100%', maxWidth: 900, background: theme === 'dark' ? 'linear-gradient(270deg, #262726, #3b3c3b)' : 'linear-gradient(90deg, #A1e1a1, #67c467)',
                                boxShadow: '0px 4px 6px #4368bc'
                            }}
                            component="nav"
                            className="rutinas-list"
                        >
                            {globalExercises?.map((exercise, index) =>
                                <ListExpandExercisesCustom key={index} exercise={exercise} />
                            )}
                        </List>
                    </main>
                    <aside className="rutinas-aside">
                        <Button
                            onClick={toggleModalEditExercise}
                            variant="contained"
                            sx={{ margin: '1rem', width: '33.5vw' }}>
                            Editar ejercicio
                            <EditOutlined />
                        </Button>
                        {showModalEditExercise &&
                            <ModalWindow
                                show={showModalEditExercise}
                                title={modalTitleEditExercise}
                                content={modalContentEditExercise}
                                action='editExercise'
                                data={EditExerciseData}
                                behavior={() => { }}
                            />
                        }
                        <Button
                            onClick={toggleModalDeleteExercise}
                            variant="contained"
                            sx={{ margin: '1rem', width: '33.5vw' }}>
                            Eliminar ejercicio
                            <DeleteOutline />
                        </Button>
                        {showModalDeleteExercise &&
                            <ModalWindow
                                show={showModalDeleteExercise}
                                title={modalTitleDeleteExercise}
                                content={modalContentDeleteExercise}
                                action='deleteExercise'
                                data={DeleteExerciseData}
                                behavior={refetchExercisesData}
                            />
                        }
                    </aside>
                </section >
            }
        </>
    )
}

export default Ejercicios