import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { LoginServiceProps } from '../utils/types'
import AuthorizationService from './AuthorizationService'


async function LoginService (credentials: LoginServiceProps) {


    try {
        const { data } = await axios.post(`${baseUrl}Sign/Login`, credentials)
        AuthorizationService.setToken(data.access_token)
        return data
    } catch (error) {
        throw new Error("Error en el login de usuario")
    }
}

export default LoginService