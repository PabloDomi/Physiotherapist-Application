import { useState } from "react";
import { ListItemButton, ListItemIcon, ListItemText, Collapse, Button } from "@mui/material";
import { ExpandLess, ExpandMore, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { ListExpandProps } from "../utils/types";
import { useGlobalState } from "../store/useGlobalState";
import ListExpandExercises from "./ListExpandExercises";

function ListExpandRoutines(ListExpandProps: ListExpandProps) {

    const { rutina } = ListExpandProps
    const [open, setOpen] = useState(false);
    const theme = useGlobalState(state => state.theme)

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton className={theme === 'dark' ? 'desplegable-lista' : 'desplegable-lista-light'} onClick={handleClick}>
                <ListItemIcon
                    id={theme === 'light' ? 'icono-lista-light' : 'icono-lista-dark'}
                >
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText
                    id={theme === 'light' ? 'texto-lista-light' : 'texto-lista-dark'}
                    disableTypography={true}
                    primary={rutina.name} />
                <Button id={theme === 'light' ? 'btn-lista-light' : 'btn-lista-dark'}>
                    <EditOutlined />
                </Button>
                <Button id={theme === 'light' ? 'btn-lista-light' : 'btn-lista-dark'}>
                    <DeleteOutline />
                </Button>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListExpandExercises rutina={rutina} />
            </Collapse>
        </>
    )
}

export default ListExpandRoutines
