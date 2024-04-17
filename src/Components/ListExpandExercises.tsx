import { Circle } from "@mui/icons-material"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
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
                <ListItemButton key={index} sx={{ pl: 10 }}>
                    <ListItemIcon className="circle-container-exercise">
                        <Circle
                            className="circle-icon-exercise"
                            sx={theme === 'light' ? { color: '#444444' } : { color: '#C8d3ef' }} />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography={true}
                        primary={<><span className="primary-text-exercise">{exercise.name}</span><KeyboardDoubleArrowRightOutlinedIcon sx={{ marginRight: '1rem' }} /></>}
                        secondary={exercise.description}
                        sx={theme === 'dark' ? { color: '#C8d3ef' } : { color: 'inherit' }} />
                </ListItemButton>
            )}
        </List>
    )
}

export default ListExpandExercises
