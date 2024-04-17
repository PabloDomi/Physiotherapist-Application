import { List } from "@mui/material";
import '../css/Rutinas.css';
import { useGlobalState } from "../store/useGlobalState";
import ListExpand from "../components/ListExpand";
import { mockRoutines } from "../utils/MockData";
import { Data } from "../utils/types";



export const Rutinas = () => {

    const theme = useGlobalState(state => state.theme)

    const routineEntries = Object.values(mockRoutines)

    return (
        <section className={theme === 'light' ? 'rutinas-section rutinas-background-light' : 'rutinas-section rutinas-background-dark'}>
            <h1>Lista de Rutinas</h1>
            <main className="rutinas-container">
                <List
                    sx={{
                        width: '100%', maxWidth: 900, background: theme === 'dark' ? 'linear-gradient(270deg, #606160, #aaaaaa)' : 'linear-gradient(90deg, #A1e1a1, #67c467)',
                        boxShadow: '0px 4px 6px rgba(0, 100, 0, 0.5)'
                    }}
                    component="nav"
                >
                    {routineEntries.map((routine: Data) =>
                        <ListExpand key={routine.id} rutina={routine} />
                    )}
                </List>
            </main>
        </section >
    )
}