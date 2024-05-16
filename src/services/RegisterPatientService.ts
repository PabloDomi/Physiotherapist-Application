import axios from 'axios'
import { authorizationHeader, baseUrl } from '../utils/Constants'
import { registerPatientServiceProps } from '../utils/types'


async function RegisterPatientService(credentials: registerPatientServiceProps) {

    try {
        const { data } = await axios.post(`${baseUrl}patient_management/registerPatient`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error en el registro de paciente")
    }
}

export default RegisterPatientService