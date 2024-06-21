import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { ChangePasswordServiceProps, authHeader, verifyTokenCredentialsProps } from '../utils/types'

const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

async function ChangePasswordService(credentials: ChangePasswordServiceProps | undefined) {

    const authHeader: authHeader = authHeaders()

    try {
        const { data } = await axios.put(`${baseUrl}user_management/changePassword`, credentials, authHeader)
        return data
    } catch (error) {
        throw new Error("Error en el cambio de contraseña")
    }
}

async function ChangePasswordServiceWithoutToken(credentials: ChangePasswordServiceProps | undefined) {
    try {
        const { data } = await axios.put(`${baseUrl}user_management/changePasswordWithoutToken`, credentials)
        return data
    } catch (error) {
        throw new Error("Error en el cambio de contraseña")
    }
}

async function verifyValidationToken(verifyTokenCredentials: verifyTokenCredentialsProps) {
    try {
        const { data } = await axios.post(`${baseUrl}user_management/verifyValidationToken`, verifyTokenCredentials)
        return data
    } catch (error) {
        throw new Error("Error en la verificación del token")
    }
}

export default { ChangePasswordService, ChangePasswordServiceWithoutToken, verifyValidationToken }