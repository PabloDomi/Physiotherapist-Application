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
    age: Age
    gender: Gender
}

export interface UserAdmin {
    id: Id
    name: Name
    email: string
    access_token: string
}

export type ModalType = boolean;

export interface ModalProps {
    show: boolean
    title: string
    content: ReactNode
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
    details: User[]
    theme: Theme
}

export interface SearchListProps {
    filteredPersons: User[]
}

export interface EstadisticasProps {
    theme: Theme
}

export interface SearchCardProps {
    key: number;
    person: User;
}

interface GlobalState {
    view: string
    user: UserAdmin | null
    setUser: (newUser: UserAdmin) => void
    changeView: (view: string) => void
    customStatsData: CustomStatsData | undefined
    changeCustomStatsData: (newData: CustomStatsData) => void
    setCustomStatsDataUndefined: () => void
    theme: Theme
    toggleTheme: () => void
    showModal: ModalType
    toggleModal: () => void
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