import axios from 'axios';
import { Id } from '../utils/types';
import { baseUrl } from '../utils/Constants';


const deletePatient = async (id: Id) => {
    try {
        const res = await axios.delete(`${baseUrl}patient_management/patientDelete/${id}`)
        return { res }
    } catch (error) {
        console.error(error)
    }
}

const deleteAdmin = async (email: string) => {

    try {
        const res = await axios.delete(`${baseUrl}user_management/deleteUser/${email}`)
        return { res }
    } catch (error) {
        console.error(error)
    }


}

export default { deletePatient, deleteAdmin }