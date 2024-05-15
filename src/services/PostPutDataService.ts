import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { AddExerciseToRoutineServiceProps, AddRoutineServiceProps, EditExerciseServiceProps, EditRoutineDataTypes } from '../utils/types'


async function AddRoutineService(credentials: AddRoutineServiceProps) {

    try {
        const { data } = await axios.post(`${baseUrl}routine_management/addRoutine`, credentials)
        return data
    } catch (error) {
        throw new Error("Error añadiendo la rutina")
    }
}

async function AddExerciseToRoutineService(credentials: AddExerciseToRoutineServiceProps) {

        try {
            const { data } = await axios.post(`${baseUrl}routine_management/addExerciseToRoutine`, credentials)
            return data
        } catch (error) {
            throw new Error("Error añadiendo el ejercicio a la rutina")
        }
}

async function EditRoutineService(credentials: EditRoutineDataTypes) {

    try {
        const { data } = await axios.put(`${baseUrl}routine_management/updateRoutine`, credentials)
        return data
    } catch (error) {
        throw new Error("Error editando la rutina")
    }
}

async function EditExerciseService(credentials: EditExerciseServiceProps) {

    try {
        const { data } = await axios.put(`${baseUrl}routine_management/updateExercise`, credentials)
        return data
    } catch (error) {
        throw new Error("Error editando el ejercicio")
    }
}

export default { EditExerciseService, AddRoutineService, AddExerciseToRoutineService, EditRoutineService }