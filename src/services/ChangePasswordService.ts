import axios from 'axios'
import { authorizationHeader, baseUrl } from '../utils/Constants'
import { ChangePasswordServiceProps } from '../utils/types'


async function ChangePasswordService(credentials: ChangePasswordServiceProps | undefined) {

    try {
        const { data } = await axios.put(`${baseUrl}user_management/changePassword`, credentials, authorizationHeader)
        return data
    } catch (error) {
        throw new Error("Error en el cambio de contraseña")
    }
}

export default ChangePasswordService