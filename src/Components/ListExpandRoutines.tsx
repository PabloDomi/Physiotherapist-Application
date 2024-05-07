import { useState } from "react";
import { ListItemButton, ListItemIcon, ListItemText, Collapse, Button } from "@mui/material";
import { ExpandLess, ExpandMore, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { ListExpandProps } from "../utils/types";
import { useGlobalState } from "../store/useGlobalState";
import ListExpandExercises from "./ListExpandExercises";
import ModalWindow from "./Modal";
import useAreUSure from "../hooks/useAreUSure";

function ListExpandRoutines(ListExpandProps: ListExpandProps) {

    const { rutina, setRoutines, rutinas } = ListExpandProps
    const [open, setOpen] = useState(false);
    const theme = useGlobalState(state => state.theme)

    const handleClick = () => {
        setOpen(!open);
    };

    const information = '¿Está seguro de que desea eliminar esta rutina y toda su información relacionada?'

    const {
        showModalAreUSure,
        toggleModalAreUSure,
        modalTitleAreUSure,
        modalContentAreUSure
    } = useAreUSure(information)

    const handleDeleteRoutineClick = () => {
        toggleModalAreUSure()

        console.log(rutina)
    }

    const refetchRoutines = () => {
        const newRoutines = rutinas.filter((r) => r.id !== rutina.id)
        setRoutines(newRoutines)
    }

    const handleEditRoutineClick = () => { }

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
                <Button onClick={handleEditRoutineClick} id={theme === 'light' ? 'btn-lista-light' : 'btn-lista-dark'}>
                    <EditOutlined />
                </Button>
                <Button onClick={handleDeleteRoutineClick} id={theme === 'light' ? 'btn-lista-light' : 'btn-lista-dark'}>
                    <DeleteOutline />
                </Button>
                {showModalAreUSure &&
                    <ModalWindow
                        show={showModalAreUSure}
                        title={modalTitleAreUSure}
                        content={modalContentAreUSure}
                        action='deleteRoutine'
                        data={rutina.id}
                        behavior={refetchRoutines}
                    />
                }
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListExpandExercises rutina={rutina} />
            </Collapse>
        </>
    )
}

export default ListExpandRoutines
