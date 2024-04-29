import { Form } from "react-bootstrap"
import { useGlobalState } from "../store/useGlobalState"
import { registerPatientFormSchema } from "../utils/schemas"
import { z } from "zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// TODO -> Las validaciones de este hook no funcionan porque el boton de submit no está aqui,
// sino en el componente "Modal", y no, poniendo el boton del modal con tipo submit tampoco funciona

type ErrorMessage = {
    message: string
    severity: 'error' | 'warning' | 'info' | 'success'
}

type RegisterPatientSchema = z.infer<typeof registerPatientFormSchema>

export function useRegisterPatient() {

    const { handleSubmit,
        control,
        formState: { errors }
    } =
        useForm<RegisterPatientSchema>({
            resolver: zodResolver(registerPatientFormSchema),
            defaultValues: {
                name: '',
                surname: '',
                age: undefined,
                gender: undefined,
                routine_id: 0
            }
        })

    const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
        message: '',
        severity: 'error'
    });

    // Efecto para mostrar los mensajes de error del register patient
    useEffect(() => {
        if (errors.name) {
            setErrorMessage({ message: 'El nombre debe tener al menos 3 caracteres', severity: 'error' })
        }
        if (errors.surname) {
            setErrorMessage({ message: 'Los apellidos deben tener al menos 6 caracteres', severity: 'error' })
        }
        if (errors.age) {
            setErrorMessage({ message: 'La edad debe ser un numero entero positivo', severity: 'error' })
        }
        if (errors.gender) {
            setErrorMessage({ message: 'El genero debe ser válido', severity: 'error' })
        }
        if (errors.routine_id) {
            setErrorMessage({ message: 'La rutina debe ser válida', severity: 'error' })
        }
    }, [errors])

    const handleRegisterPatientSubmit = (data: RegisterPatientSchema) => {
        console.log(data)
    }

    const theme = useGlobalState(state => state.theme)

    const showModalRegisterPatient = useGlobalState(state => state.showRegisterPatientModal)
    const toggleModalRegisterPatient = useGlobalState(state => state.toggleRegisterPatientModal)

    const modalTitleRegisterPatient = 'Registro de Paciente'

    const modalContentRegisterPatient =
        <Form onSubmit={handleSubmit(handleRegisterPatientSubmit)}>
            <Form.Group
                className="mb-3"
                controlId="registerPatientForm.ControlInput1"
            >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nombre del paciente"
                    autoFocus
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                    {...control.register('name')}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="registerPatientForm.ControlInput2"
            >
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Apellidos del paciente"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                    {...control.register('surname')}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="registerPatientForm.ControlInput3"
            >
                <Form.Label>Edad</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Edad del paciente"
                    className={theme === 'dark' ? 'dark-input' : 'dark-input2'}
                    {...control.register('age')}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="registerPatientForm.SelectCustom1"
            >
                <Form.Label>Género</Form.Label>
                <Form.Select
                    aria-label="Default select"
                    {...control.register("gender")}
                >
                    <option>Seleccionar entre...</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                    <option value="3">Otro</option>
                </Form.Select>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="registerPatientForm.SelectCustom2"
            >
                <Form.Label>Rutina</Form.Label>
                <Form.Select
                    aria-label="Default select"
                    {...control.register("routine_id")}
                >
                    <option>Seleccionar rutina de paciente...</option>
                    <option value="1">Rutina 1 example</option>
                    <option value="2">Rutina 2 example</option>
                    {/* 
                        TODO -> map con las rutinas creadas disponibles para este usuario 
                        Habría que hacer un fetch a la base de datos para obtener las rutinas 
                        filtradas por el nombre y apellidos del paciente que se está registrando
                    */}
                </Form.Select>
            </Form.Group>
        </Form>

    return { errorMessage, showModalRegisterPatient, toggleModalRegisterPatient, modalTitleRegisterPatient, modalContentRegisterPatient, theme }
}

export default useRegisterPatient
