import { Circle, DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Button, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useGlobalState } from "../store/useGlobalState"
import { RoutineData } from "../utils/types"
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import '../css/Ejercicios.css'



function ListExpandExercisesCustom(rutina: RoutineData) {

    const { routine } = rutina
    const ejercicios = Object.values(routine.ejercicios)

    const theme = useGlobalState(state => state.theme)

    return (
        <List
            component="div"
            disablePadding
        >
            {ejercicios.map((exercise, index) =>
                <ListItemButton key={index} sx={{ pl: 6 }}>
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
                    <Button sx={theme === 'light' ? { color: '#444444' } : { color: '#8faef5' }}>
                        <EditOutlined />
                    </Button>
                    <Button sx={theme === 'light' ? { color: '#444444' } : { color: '#8faef5' }}>
                        <DeleteOutline />
                    </Button>
                </ListItemButton>
            )}
        </List>
    )
}

export default ListExpandExercisesCustom
