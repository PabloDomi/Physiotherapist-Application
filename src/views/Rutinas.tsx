import { Button, List } from "@mui/material";
import '../css/Rutinas.css';
import { useGlobalState } from "../store/useGlobalState";
import { RoutineData } from "../utils/types";
import ListExpandRoutines from "../components/ListExpandRoutines";
import { usePatients } from "../hooks/usePatients";
import Loader from "../components/Loader";
import ModalWindow from "../components/Modal";
import useAddRoutine from "../hooks/useAddRoutine";
import GetDataService from "../services/GetDataService";
import { useEffect, useState } from "react";
import useAddExerciseToRoutine from "../hooks/useAddExerciseToRoutine"


export const Rutinas = () => {

    const theme = useGlobalState(state => state.theme)
    const [routines, setRoutines] = useState<RoutineData[]>()
    const { isLoading } = usePatients()

    const {
        showModalAddRoutine,
        toggleModalAddRoutine,
        modalTitleAddRoutine,
        modalContentAddRoutine,
        AddRoutineData
    } = useAddRoutine()

    useEffect(() => {
        const fetchRoutines = async () => {
            try {
                const res = await GetDataService.getRoutines()
                setRoutines(res)
            } catch (error) {
                console.error(error)
                throw new Error("Error al obtener los administradores")
            }
        }
        fetchRoutines()
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModalAddRoutine()
    }

    const refetchRoutinesData = async () => {
        try {
            const res = await GetDataService.getRoutines()
            setRoutines(res)
        } catch (error) {
            console.error(error)
            throw new Error("Error al obtener los pacientes")
        }
    }

    const {
        showModalAddExerciseToRoutine,
        toggleModalAddExerciseToRoutine,
        modalTitleAddExerciseToRoutine,
        modalContentAddExerciseToRoutine,
        AddExerciseToRoutineData
    } = useAddExerciseToRoutine()




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
                            className="rutinas-list"
                        >
                            {routines?.map((routine, index) =>
                                <ListExpandRoutines key={index} rutina={routine} />
                            )}
                            <Button
                                sx={theme === 'dark' ? { color: '#C8d3ef' } : { color: 'inherit' }}
                                id={theme === 'light' ? 'btn-agregar-ej-light' : 'btn-agregar-ej'}
                                variant="contained"
                                onClick={handleClickAddRoutine}
                            >
                                Añadir Ejercicio a Rutina
                            </Button>
                            {showModalAddExerciseToRoutine &&
                                <ModalWindow
                                    show={showModalAddExerciseToRoutine}
                                    title={modalTitleAddExerciseToRoutine}
                                    content={modalContentAddExerciseToRoutine}
                                    action='addExerciseToRoutine'
                                    data={AddExerciseToRoutineData}
                                    behavior={refetchRoutinesData}
                                >
                                </ModalWindow>
                            }
                        </List>
                    </main>
                    <aside className="rutinas-aside">
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            className={theme === 'light' ? 'btn-agregar-rutina-light' : 'btn-agregar-rutina'}>
                            Agregar Rutina
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
                    </aside>
                </section >
            }
        </>
    )
}