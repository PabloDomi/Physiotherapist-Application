import { Button, List } from "@mui/material";
import '../css/Ejercicios.css';
import { useGlobalState } from "../store/useGlobalState";
import { mockRoutines } from "../utils/MockData";
import { Data } from "../utils/types";
import { usePatients } from "../hooks/usePatients";
import ListExpandExercisesCustom from "../components/ListExpandExercisesCustom";

const Ejercicios = () => {

    const theme = useGlobalState(state => state.theme)
    const { isLoading } = usePatients()

    const routineEntries = Object.values(mockRoutines)

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
                            {routineEntries.map((routine: Data) =>
                                <ListExpandExercisesCustom key={routine.id} routine={routine} />
                            )}
                        </List>
                    </main>
                    <aside className="rutinas-aside">
                        <Button variant="contained" color="primary"
                            sx={{ width: '70.5%', marginTop: '1.4rem', maxWidth: '900px' }}>
                            Agregar Ejercicio
                        </Button>
                    </aside>
                </section >
            }
        </>
    )
}

export default Ejercicios