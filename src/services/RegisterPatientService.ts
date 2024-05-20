import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { authHeader, registerPatientServiceProps } from '../utils/types'


const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

async function RegisterPatientService(credentials: registerPatientServiceProps) {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.post(`${baseUrl}patient_management/registerPatient`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error en el registro de paciente")
    }
}

export default RegisterPatientService