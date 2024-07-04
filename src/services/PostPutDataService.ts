import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { AddExerciseToRoutineServiceProps, AddRoutineServiceProps, CreateTabletServiceProps, EditExerciseServiceProps, EditRoutineDataTypes, UpdateTabletServiceProps, authHeader } from '../utils/types'

const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}


async function AddRoutineService(credentials: AddRoutineServiceProps) {

    const authorizationHeader: authHeader = authHeaders()


    try {
        const { data } = await axios.post(`${baseUrl}routine_management/addRoutine`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error añadiendo la rutina")
    }
}

async function AddExerciseToRoutineService(credentials: AddExerciseToRoutineServiceProps) {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.post(`${baseUrl}routine_management/addExerciseToRoutine`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error añadiendo el ejercicio a la rutina")
    }
}

async function EditRoutineService(credentials: EditRoutineDataTypes) {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.put(`${baseUrl}routine_management/updateRoutine`, credentials,authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error editando la rutina")
    }
}

async function EditExerciseService(credentials: EditExerciseServiceProps) {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.put(`${baseUrl}routine_management/updateExercise`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error editando el ejercicio")
    }
}

async function CreateTablet(credentials: CreateTabletServiceProps) {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.post(`${baseUrl}patient_management/createTablet`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error añadiendo la tablet")
    }
}

async function UpdateTablet(credentials: UpdateTabletServiceProps) {
    
        const authorizationHeader: authHeader = authHeaders()
    
        try {
            const { data } = await axios.put(`${baseUrl}patient_management/updateTablet`, credentials, authorizationHeader)
            return data
        } catch (error) {
            throw new Error("Error actualizando la tablet")
        }
}

export default { 
    CreateTablet, EditExerciseService, AddRoutineService, AddExerciseToRoutineService, 
    EditRoutineService, UpdateTablet 
}