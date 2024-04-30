import {ReactNode} from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema, registerFormSchema } from "./schemas";

export type Theme = "light" | "dark" | string;

export type Id = number;
export type Name = string;
export type Age = number;
export type Gender = string;

export interface User { 
    id: Id
    name: Name
    surname: Name
    age: Age
    gender: Gender
    routine_id: Id
}

export interface UserAdmin {
    id: Id
    name: Name
    email: string
    access_token: string
}

export type ModalType = boolean;

interface ChangePasswordDataTypes {
    email: string | undefined
    password: string | undefined
    newPassword: string | undefined
}

interface RegisterPatientDataTypes {
    name: string | undefined
    surname: string | undefined
    age: number | undefined
    gender: string | undefined
    routine_id: number | string | undefined
}

export interface ModalProps {
    show: boolean
    title: string
    content: ReactNode
    action: string
    data: ChangePasswordDataTypes |  RegisterPatientDataTypes | number | string | null | undefined
    behavior: () => void
}

export interface ButtonToggleThemeProps {
    toggleTheme: () => void
    theme: Theme
}

export interface NavbarProps {
    styledClassName: string // ClassName for the Navbar to set the style of darkTheme or lightTheme
    brandName: string // Name of the brand to display in the Navbar
    imageSrcPath: string // Path of the image to display in the Navbar
}

export interface ScrollableListProps {
    children: ReactNode
}

export interface SearchProps {
    chartTitle: (newTitle: string) => void
    details: User[] | null
    theme: Theme
}

export interface SearchListProps {
    chartTitle: (newTitle: string) => void
    filteredPersons: User[] | undefined
}

export interface EstadisticasProps {
    theme: Theme
}

export interface SearchCardProps {
    chartTitle: (newTitle: string) => void
    key: number;
    person: User;
}

interface GlobalState {
    view: string
    user: UserAdmin | null
    setUser: (newUser: UserAdmin) => void
    patients: User[] | null
    setPatients: (newPatients: User[]) => void
    changeView: (view: string) => void
    customStatsData: CustomStatsData | undefined
    changeCustomStatsData: (newData: CustomStatsData) => void
    setCustomStatsDataUndefined: () => void
    theme: Theme
    toggleTheme: () => void
    showChangePasswordModal: ModalType
    toggleChangePasswordModal: () => void
    showRegisterPatientModal: ModalType
    toggleRegisterPatientModal: () => void
    showAreUSureModal: ModalType
    toggleAreUSureModal: () => void
    showDeleteAdminModal: ModalType
    toggleDeleteAdminModal: () => void
  }

export interface CustomStatsData {
    labels: string[]
    titleChart: string
    yaxisTitle: string
    yaxisTitleOpposite: string
    porcentualData: number[]
    timeData: number[]
}

interface Exercise {
    name: string;
    description: string;
}

interface Data {
    id: Id;
    name: string;
    description: string;
    ejercicios: {
        ej1: Exercise;
        ej2: Exercise;
        ej3: Exercise;
    };
    tiempoEstimado: number;
}

interface ExerciseData {
    exercises: Exercise[];
}

interface RoutineData {
    routine: Data;
}

interface ListExpandProps {
    key: number;
    rutina: Data;
}

interface SignUpFormFieldProps {
    name: FieldPath<z.infer<typeof registerFormSchema>>;
    placeholder: string;
    inputType: string;
    formControl: Control<z.infer<typeof registerFormSchema>, unknown>;
}

interface LoginFormFieldProps {
    name: FieldPath<z.infer<typeof loginFormSchema>>;
    placeholder: string;
    inputType: string;
    formControl: Control<z.infer<typeof loginFormSchema>, unknown>;
}

interface RegisterServiceProps {
        name: string;
        email: string;
        password: string;
}

interface LoginServiceProps {
        email: string;
        password: string;
}

interface RegisterPatientFormProps {
    name: FieldPath<z.infer<typeof registerFormSchema>>;
    surname: FieldPath<z.infer<typeof registerFormSchema>>;
    age: FieldPath<z.infer<typeof registerFormSchema>>;
}

interface ChangePasswordServiceProps {
    email: string | undefined;
    newPassword: string | undefined;
}

interface registerPatientServiceProps {
    name: string | undefined;
    surname: string | undefined;
    age: number | undefined;
    gender: string | undefined;
    routine_id: number | string | undefined;
}