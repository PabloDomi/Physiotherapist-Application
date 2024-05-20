import axios from 'axios';
import { Id, authHeader } from '../utils/types';
import { baseUrl } from '../utils/Constants';

const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

const DeletePatient = async (id: Id) => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const res = await axios.delete(`${baseUrl}patient_management/patientDelete/${id}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const DeleteAdmin = async (email: string) => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const res = await axios.delete(`${baseUrl}user_management/deleteUser/${email}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const DeleteRoutine = async (id: Id) => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const res = await axios.delete(`${baseUrl}routine_management/deleteRoutine/${id}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const DeleteExercise = async (id: Id) => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const res = await axios.delete(`${baseUrl}routine_management/deleteExercise/${id}`, authorizationHeader)
        return { res }
    } catch (error) {
        console.error(error)
    }

}

export default { DeleteExercise, DeletePatient, DeleteAdmin, DeleteRoutine }