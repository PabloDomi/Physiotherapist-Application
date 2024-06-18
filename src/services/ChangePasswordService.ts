import axios from 'axios'
import { baseUrl } from '../utils/Constants'
import { ChangePasswordServiceProps, authHeader } from '../utils/types'

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

export default ChangePasswordService