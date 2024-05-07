import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { AddExerciseToRoutineServiceProps, AddRoutineServiceProps } from '../utils/types'


async function AddRoutineService(credentials: AddRoutineServiceProps) {

    try {
        const { data } = await axios.post(`${baseUrl}routine_management/addRoutine`, credentials)
        return data
    } catch (error) {
        throw new Error("Error añadiendo la rutina")
    }
}

async function AddExerciseToRoutineService(credentials: AddExerciseToRoutineServiceProps) {
    
        console.log(credentials)

        try {
            const { data } = await axios.post(`${baseUrl}routine_management/addExerciseToRoutine`, credentials)
            return data
        } catch (error) {
            throw new Error("Error añadiendo el ejercicio a la rutina")
        }
}

export default { AddRoutineService, AddExerciseToRoutineService }