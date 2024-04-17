import { Button, List } from "@mui/material";
import '../css/Rutinas.css';
import { useGlobalState } from "../store/useGlobalState";
import { mockRoutines } from "../utils/MockData";
import { Data } from "../utils/types";
import ListExpandRoutines from "../components/ListExpandRoutines";



export const Rutinas = () => {

    const theme = useGlobalState(state => state.theme)

    const routineEntries = Object.values(mockRoutines)

    return (
        <section className={theme === 'light' ? 'rutinas-section rutinas-background-light' : 'rutinas-section rutinas-background-dark'}>
            <h1>Lista de Rutinas</h1>
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
                        <ListExpandRoutines key={routine.id} rutina={routine} />
                    )}
                </List>
            </main>
            <aside className="rutinas-aside">
                <Button variant="contained" color="success"
                    sx={{ width: '70.5%', marginTop: '1.4rem', maxWidth: '900px' }}>
                    Agregar Rutina
                </Button>
            </aside>
        </section >
    )
}