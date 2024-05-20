import { useEffect, useRef } from 'react'
import GetDataService from '../services/GetDataService'
import { UserAdmin } from '../utils/types';
import AuthorizationService from '../services/AuthorizationService';

const useRefreshJWToken = (user: UserAdmin | null) => {

    const isInitialRender = useRef(true)

    useEffect(() => {

        // TODO: Revisar que el token cambia cada 5 minutos aprox, si fallan las request con 401 no funciona.

        if (isInitialRender.current && user !== undefined && user !== null) {
            const updateToken = async () => {
                //const data = await GetDataService.refreshJWToken()
                const data = await GetDataService.getAccessToken(user.email)
                if (data) {
                    AuthorizationService.setToken(data.access_token)
                }
            };

            isInitialRender.current = false

            // Configuración del intervalo para refrescar el token cada 5 minutos
            const interval = setInterval(() => {
                updateToken()
            }, 1000 * 60 * 3)

            // Cleanup function del interavalo
            return () => clearInterval(interval)
        }
    }, [user])
}

export default useRefreshJWToken
