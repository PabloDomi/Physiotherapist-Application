import { useState } from "react";
import { ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListExpandProps } from "../utils/types";
import { useGlobalState } from "../store/useGlobalState";
import ListExpandExercises from "./ListExpandExercises";


function ListExpandRoutines(ListExpandProps: ListExpandProps) {

    const { rutina, componentId: key } = ListExpandProps
    const [open, setOpen] = useState(false);
    const theme = useGlobalState(state => state.theme)

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton id={key.toString()} className={theme === 'dark' ? 'desplegable-lista' : 'desplegable-lista-light'} onClick={handleClick}>
                <ListItemIcon
                    id={theme === 'light' ? 'icono-lista-light' : 'icono-lista-dark'}
                >
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText
                    id={theme === 'light' ? 'texto-lista-light' : 'texto-lista-dark'}
                    disableTypography={true}
                    primary={rutina.name} />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListExpandExercises rutina={rutina} />
            </Collapse>
        </>
    )
}

export default ListExpandRoutines
