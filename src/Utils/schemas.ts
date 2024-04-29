import { z } from 'zod'


export const registerFormSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(6)
})

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const registerPatientFormSchema = z.object({
    name: z.string().min(3).max(50),
    surname: z.string().min(3).max(50),
    age: z.number().int().positive().max(150),
    gender: z.enum(["Hombre","Mujer", "Otro"]),
    routine_id: z.number().int().positive()
})