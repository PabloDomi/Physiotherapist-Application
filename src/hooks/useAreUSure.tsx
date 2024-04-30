import { useGlobalState } from "../store/useGlobalState"

export function useAreUSure(information: string) {

    const theme = useGlobalState(state => state.theme)

    const showModalAreUSure = useGlobalState(state => state.showAreUSureModal)
    const toggleModalAreUSure = useGlobalState(state => state.toggleAreUSureModal)

    const modalTitleAreUSure = '¿Está seguro de los cambios?'

    const modalContentAreUSure = <><label>{information}</label></>

    return { showModalAreUSure, toggleModalAreUSure, modalTitleAreUSure, modalContentAreUSure, theme }
}

export default useAreUSure
