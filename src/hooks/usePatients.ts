import { useEffect, useState } from "react"
import GetDataService from "../services/GetDataService"
import { useGlobalState } from "../store/useGlobalState"

export default function usePatients() {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const setPatients = useGlobalState(state => state.setPatients)


    useEffect(() => {

        const getPatients = async () => {
            try {
                const res = await GetDataService.getPatients()
                setPatients(res)
            } catch (error) {
                console.error(error)
                throw new Error("Error al obtener los pacientes")
            }
        }

        getPatients()

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [setPatients])


    return { isLoading }
}