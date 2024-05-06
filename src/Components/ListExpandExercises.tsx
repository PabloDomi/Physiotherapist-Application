import { Circle } from "@mui/icons-material"
import { Button, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useGlobalState } from "../store/useGlobalState"
import { Exercise, RoutineData } from "../utils/types"
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import '../css/Rutinas.css'
import { useState } from "react"
import ModalWindow from "./Modal"
import useAddExerciseToRoutine from "../hooks/useAddExerciseToRoutine"

function ListExpandExercises({ rutina, refetchRoutinesData }: { rutina: RoutineData, refetchRoutinesData: () => void }) {

    const [ejercicios, setEjercicios] = useState<Exercise[] | undefined>(undefined)

    const {
        showModalAddExerciseToRoutine,
        toggleModalAddExerciseToRoutine,
        modalTitleAddExerciseToRoutine,
        modalContentAddExerciseToRoutine,
        AddExerciseToRoutineData
    } = useAddExerciseToRoutine(rutina.name)

    if (rutina.ejercicios !== undefined) {
        setEjercicios(Object.values(rutina.ejercicios))
    }

    const theme = useGlobalState(state => state.theme)

    const refetchExercisesData = () => {
        refetchRoutinesData()

        if (rutina.ejercicios !== undefined) {
            setEjercicios(Object.values(rutina.ejercicios))
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        toggleModalAddExerciseToRoutine()
    }

    return (
        <List
            component="div"
            disablePadding
        >
            {ejercicios !== undefined &&
                ejercicios?.map((exercise, index) =>
                    <ListItemButton key={index} sx={{ pl: 10 }}>
                        <ListItemIcon className="circle-container-exercise">
                            <Circle
                                className="circle-icon-exercise"
                                sx={theme === 'light' ? { color: '#127e12' } : { color: '#C8d3ef' }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography={true}
                            primary={
                                <>
                                    <span className={theme === 'light' ? 'primary-text-exercise-light' : 'primary-text-exercise'}>
                                        {exercise.name}
                                    </span>
                                    <KeyboardDoubleArrowRightOutlinedIcon
                                        sx={{ marginRight: '1rem' }} />
                                </>
                            }
                            secondary={exercise.description}
                            sx={theme === 'dark' ? { color: '#C8d3ef' } : { color: '#127e12' }} />
                    </ListItemButton>
                )
            }
            {ejercicios === undefined &&
                <h5 id={theme === 'light' ? 'no-exercises-light' : 'no-exercises-dark'}>
                    No hay ejercicios en esta rutina
                </h5>
            }
            <Button
                sx={theme === 'dark' ? { color: '#C8d3ef' } : { color: 'inherit' }}
                className={theme === 'light' ? 'btn-agregar-ej-light' : 'btn-agregar-ej'}
                variant="contained"
                onClick={handleClick}
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
                    behavior={refetchExercisesData}
                >
                </ModalWindow>
            }
        </List>
    )
}

export default ListExpandExercises
