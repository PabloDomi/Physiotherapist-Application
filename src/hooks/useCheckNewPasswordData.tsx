import GetDataService from "../services/GetDataService"
import { ChangePasswordDataTypes } from "../utils/types"


function useCheckNewPasswordData() {
    function checkChangePasswordFormData(data: ChangePasswordDataTypes) {
        try {
            GetDataService.checkEmailExists(data?.email)

            if (data?.password !== data?.newPassword) {
                throw new Error('Las contraseñas no coinciden')
            }

            if (data?.newPassword.length < 6 || data?.password.length < 6) {
                throw new Error('La contraseña debe tener al menos 6 caracteres')
            }

        } catch (error) {
            console.error(error)
            throw new Error('Error al verificar la existencia del email')
        }
    }

    return { checkChangePasswordFormData }
}

export default useCheckNewPasswordData
