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
    data: ChangePasswordDataTypes |  RegisterPatientDataTypes | AddExerciseToRoutineDataTypes | AddRoutineDataTypes | number | string | null | undefined
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
    chartTitle: (newTitle: number) => void
    details: User[] | null
    theme: Theme
}

export interface SearchListProps {
    chartTitle: (newTitle: number) => void
    filteredPersons: User[] | undefined
}

export interface EstadisticasProps {
    theme: Theme
}

export interface SearchCardProps {
    chartTitle: (newTitle: number) => void
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
    showAddRoutineModal: ModalType
    toggleAddRoutineModal: () => void
    showAddExerciseToRoutineModal: ModalType
    toggleAddExerciseToRoutineModal: () => void
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

interface RoutineData {
    id: Id;
    name: string;
    description: string;
    ejercicios: Exercise[] | []
    tiempoEstimado: number;
    patient_id: number;
    user_id: number;
}

interface ExerciseData {
    exercises: Exercise[];
}

interface ListExpandProps {
    key: number;
    rutina: RoutineData;
    refetchRoutinesData: () => void;
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

interface AddRoutineDataTypes {
    name: string | undefined;
    description: string | undefined;
    estimatedTime: number | undefined;
    patient_id: number | undefined;
}

interface AddRoutineServiceProps {
    name: string | undefined;
    description: string | undefined;
    estimatedTime: number | undefined;
    user_id: number | undefined;
    patient_id: number | undefined;
}

interface AddExerciseToRoutineDataTypes {
    name: string | undefined;
    description: string | undefined;
    routine_name?: string | undefined;
}

interface AddExerciseToRoutineServiceProps {
    name: string | undefined;
    description: string | undefined;
    routine_name: string | undefined;
}