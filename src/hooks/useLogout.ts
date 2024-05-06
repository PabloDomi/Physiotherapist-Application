import { useNavigate } from "react-router-dom"

function useLogout() {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()

    }

    return { logout }
}

export default useLogout
