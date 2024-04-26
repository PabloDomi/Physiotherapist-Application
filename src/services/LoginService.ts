import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { LoginServiceProps } from '../utils/types'


const LoginService = async (credentials: LoginServiceProps) => {
    try {
        const { data } = await axios.post(`${baseUrl}Sign/Login`, credentials)
        return data
    } catch (error) {
        throw new Error("Error en el login de usuario")
    }
}

export default LoginService