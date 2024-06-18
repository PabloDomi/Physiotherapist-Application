import { useNavigate } from "react-router-dom"
import LoginService from "../services/LoginService"
import AuthorizationService from "../services/AuthorizationService"

function useLogout() {

    const navigate = useNavigate()

    const logout = () => {

        const user = JSON.parse(window.localStorage.getItem('user') || '{}')

        if (!user) return
        const credentials = {
            email: user.email
        }

        LoginService.LogoutService(credentials)

        AuthorizationService.removeToken()
        window.localStorage.removeItem('user')
        navigate('/')
        window.location.reload()

    }

    return { logout }
}

export default useLogout
