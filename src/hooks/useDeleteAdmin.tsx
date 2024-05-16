import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { useEffect, useState } from "react"
import { UserAdmin } from "../utils/types"
import GetDataService from "../services/GetDataService"

export function useDeleteAdmin() {

    const theme = useGlobalState(state => state.theme)

    const showModalDeleteAdmin = useGlobalState(state => state.showDeleteAdminModal)
    const toggleModalDeleteAdmin = useGlobalState(state => state.toggleDeleteAdminModal)

    const [userSelected, setUserSelected] = useState<string | undefined>(undefined)
    const [admins, setAdmins] = useState<UserAdmin[]>()

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const res = await GetDataService.getUsers()
                setAdmins(res)
            } catch (error) {
                console.error(error)
                throw new Error("Error al obtener los administradores")
            }
        }
        fetchAdmins()
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()

        setUserSelected(event.target.value)
    }

    const modalTitleDeleteAdmin = 'Cambio de Contraseña'

    const modalContentDeleteAdmin =
        <Form>
            <Form.Group className="mb-3" controlId="changePasswordForm.ControlInput1">
                <Form.Label style={{ marginLeft: '0.2rem' }}>Seleccione el administrador a eliminar</Form.Label>
                <Form.Select
                    style={{ color: theme === 'dark' ? '#8ed88f' : '#27ab28' }}
                    onChange={handleChange}
                    autoFocus
                    aria-label="Default select"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                >
                    {admins?.map((admin, index) => {
                        return <option key={index} value={admin.email}>{admin.name + ' --> ' + admin.email}</option>
                    })}
                </Form.Select>
            </Form.Group>

        </Form>

    return { showModalDeleteAdmin, toggleModalDeleteAdmin, modalTitleDeleteAdmin, modalContentDeleteAdmin, theme, userSelected }
}

export default useDeleteAdmin
