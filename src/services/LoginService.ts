import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { LoginServiceProps, LogoutServiceProps, authHeader } from '../utils/types'
import AuthorizationService from './AuthorizationService'

const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}


const LoginService = async (credentials: LoginServiceProps) => {
    try {
        const { data } = await axios.post(`${baseUrl}Sign/Login`, credentials)
        AuthorizationService.setToken(data.access_token)
        return data
    } catch (error) {
        throw new Error("Error en el login de usuario")
    } 
}

const LogoutService = async (credentials: LogoutServiceProps) => {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const res = await axios.post(`${baseUrl}Sign/Logout`, credentials, authorizationHeader)
        AuthorizationService.removeToken()
        return res
    } catch (error) {
        console.error(error)
        throw new Error("Error en el logout de usuario")
    }
}

const PasswordRecoveryService = async (email: string) => {
    try {
        const res = await axios.post(`${baseUrl}Sign/passwordRecovery`, { email })
        return res
    } catch (error) {
        console.error(error)
        throw new Error("Error en el envío de correo de recuperación")
    }


}


export default { LoginService, LogoutService, PasswordRecoveryService }