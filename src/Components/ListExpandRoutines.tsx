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
                    sx={theme === 'light' ? { color: '#444444', minWidth: '38px' } : { color: '#D0daf1', minWidth: '38px' }}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText
                    sx={theme === 'light' ? { color: '#444444' } : { color: '#8faef5' }}
                    disableTypography={true}
                    primary={rutina.name} />
                <Button sx={theme === 'light' ? { color: '#444444' } : { color: '#8faef5' }}>
                    <EditOutlined />
                </Button>
                <Button sx={theme === 'light' ? { color: '#444444' } : { color: '#8faef5' }}>
                    <DeleteOutline />
                </Button>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListExpandExercises routine={rutina} />
            </Collapse>
        </>
    )
}

export default ListExpandRoutines
