import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { RegisterServiceProps } from '../utils/types'


const RegisterService = async (credentials: RegisterServiceProps) => {
    try {
        const { data } = await axios.post(`${baseUrl}Sign/Register`, credentials)
        return data
    } catch (error) {
        throw new Error("Error en el registro de usuario")
    }
}

export default RegisterService
