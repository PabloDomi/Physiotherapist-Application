import axios from 'axios';
import { Id } from '../utils/types';
import { authorizationHeader, baseUrl } from '../utils/Constants';


const deletePatient = async (id: Id) => {
    try {
        const res = await axios.delete(`${baseUrl}patient_management/patientDelete/${id}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const deleteAdmin = async (email: string) => {

    try {
        const res = await axios.delete(`${baseUrl}user_management/deleteUser/${email}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const deleteRoutine = async (id: Id) => {
    try {
        const res = await axios.delete(`${baseUrl}routine_management/deleteRoutine/${id}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const deleteExercise = async (id: Id) => {
    try {
        const res = await axios.delete(`${baseUrl}routine_management/deleteExercise/${id}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }

}

export default { deleteExercise, deletePatient, deleteAdmin, deleteRoutine }