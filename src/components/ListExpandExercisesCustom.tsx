import { Circle } from "@mui/icons-material"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useGlobalState } from "../store/useGlobalState"
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined'
import '../css/Ejercicios.css'
import { ListExpandExercisesCustomProps } from "../utils/types"



function ListExpandExercisesCustom(props: ListExpandExercisesCustomProps) {

    const { exercise } = props

    const theme = useGlobalState(state => state.theme)

    return (
        <List
            component="div"
            disablePadding
        >
            <ListItemButton sx={{ pl: 6 }}>
                <ListItemIcon className="circle-container-exercise">
                    <Circle
                        className="circle-icon-exercise"
                        sx={theme === 'light' ? { color: '#444444' } : { color: '#C8d3ef' }} />
                </ListItemIcon>
                <ListItemText
                    disableTypography={true}
                    primary={
                        <>
                            <span className={theme === 'dark' ? 'primary-text-exercise' : 'primary-text-exercise-light'}>
                                {exercise.name}
                            </span>
                            <KeyboardDoubleArrowRightOutlinedIcon sx={{ marginRight: '1rem' }} />
                        </>}
                    secondary={exercise.description}
                    sx={theme === 'dark' ? { color: '#C8d3ef' } : { color: 'inherit' }} />
            </ListItemButton>
        </List>
    )
}

export default ListExpandExercisesCustom
