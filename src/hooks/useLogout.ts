import { useNavigate } from "react-router-dom"

function useLogout() {

    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        navigate('/')
        window.location.reload()

    }

    return { logout }
}

export default useLogout
