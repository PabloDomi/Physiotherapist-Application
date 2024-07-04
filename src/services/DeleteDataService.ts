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

async function DeleteTablet(tablet_id: number) {
    
    const authorizationHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.delete(`${baseUrl}patient_management/deleteTablet/${tablet_id}`, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error eliminando la tablet")
    }

}

export default { DeleteTablet, DeleteExercise, DeletePatient, DeleteAdmin, DeleteRoutine }