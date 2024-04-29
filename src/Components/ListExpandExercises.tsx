import { Circle } from "@mui/icons-material"
import { Button, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useGlobalState } from "../store/useGlobalState"
import { RoutineData } from "../utils/types"
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import '../css/Rutinas.css'

function ListExpandExercises(rutina: RoutineData) {

    const { routine } = rutina
    const ejercicios = Object.values(routine.ejercicios)

    const theme = useGlobalState(state => state.theme)

    return (
        <List
            component="div"
            disablePadding
        >
            {ejercicios.map((exercise, index) =>
                <>
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
                </>
            )}
            <Button
                sx={theme === 'dark' ? { color: '#C8d3ef' } : { color: 'inherit' }}
                className={theme === 'light' ? 'btn-agregar-ej-light' : 'btn-agregar-ej'}
                variant="contained">
                Añadir Ejercicio a Rutina
            </Button>
        </List>
    )
}

export default ListExpandExercises
