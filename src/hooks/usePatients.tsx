import { useEffect, useState } from "react"

export function usePatients() {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    // const [patients, setPatients] = useState<User[] | null>(null)

    useEffect(() => {
        /*
        fetch(API-URL + API-ENDPOINT)
            .then(res => res.json())
            .then(data => {
                setLista(data);
                setIsLoading(false)
            })
            .catch(error => console.error(error))
            */
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])


    return { isLoading }
}