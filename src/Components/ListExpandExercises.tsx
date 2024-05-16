import { Circle } from "@mui/icons-material"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useGlobalState } from "../store/useGlobalState"
import { RoutineData } from "../utils/types"
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import '../css/Rutinas.css'


function ListExpandExercises({ rutina }: { rutina: RoutineData }) {
    const theme = useGlobalState(state => state.theme)

    return (
        <List
            component="div"
            disablePadding
        >
            {rutina.exercises !== undefined &&
                rutina.exercises.map((exercise, index) =>
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
            {rutina.exercises === undefined &&
                <h5 id={theme === 'light' ? 'no-exercises-light' : 'no-exercises-dark'}>
                    No hay ejercicios en esta rutina
                </h5>
            }
        </List>
    )
}

export default ListExpandExercises
