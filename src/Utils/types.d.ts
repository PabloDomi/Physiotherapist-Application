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
    data: DeleteExerciseDataTypes | ChangePasswordDataTypes |  RegisterPatientDataTypes | AddExerciseToRoutineDataTypes | AddRoutineDataTypes | number | string | null | undefined
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

export interface EjerciciosProps {
    theme: Theme
}

export interface RoutinesProps {
    theme: Theme
}

export interface SearchCardProps {
    chartTitle: (newTitle: number) => void
    key: number;
    person: User;
    onRemove: (personId: number) => void;
    setBehavior: (behavior: behaviorSearchListProps) => void;
}

export type authHeader = {
    headers: { 
        Authorization: string 
    }
};

interface StatsTypes {
    patient_id: number;
    exercise_name: string;
    total_time: number;
    average_series_time: number;
    average_time_between_reps: number;
    reps_per_series: [number];
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
    routines: RoutineData[] | undefined
    setRoutines: (newRoutines: RoutineData[]) => void
    exercises: Exercise[] | undefined
    setExercises: (newExercises: Exercise[]) => void
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
    showEditRoutineModal: ModalType
    toggleEditRoutineModal: () => void
    showDeleteRoutineModal: ModalType
    toggleDeleteRoutineModal: () => void
    showDeleteExerciseModal: ModalType
    toggleDeleteExerciseModal: () => void
    showEditExerciseModal: ModalType
    toggleEditExerciseModal: () => void
    showManageTabletsModal: ModalType
    toggleManageTabletsModal: () => void
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
    id: Id;
    name: string;
    description: string;
    routine_ids: Id[] | []
    routine?: RoutineData | null
}

interface RoutineData {
    id: Id;
    name: string;
    description: string;
    exercises: Exercise[] | []
    estimatedTime: number;
    patient_id: number;
    user_id: number;
}

interface ExerciseData {
    exercises: Exercise[];
}

interface ListExpandProps {
    key: number;
    rutina: RoutineData;
    setRoutines: (newRoutines: RoutineData[]) => void;
    rutinas: RoutineData[];
    componentId: number;
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

interface LogoutServiceProps {
    email: string;
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

interface EditRoutineDataTypes {
    routine_id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    estimatedTime: number | undefined;
    patient_id: number | undefined;
}

interface DeleteRoutineDataTypes {
    routine_id: number | undefined;
}

interface ListExpandExercisesCustomProps {
    key: number;
    exercise: Exercise;
}

interface EditExerciseDataTypes {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    routine_ids: number[] | undefined;
    routine: RoutineData[] | undefined | null;
}

interface EditExerciseServiceProps {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    routine_ids: number[] | undefined;
}

interface behaviorSearchListProps {
    onRemove: (personId: number) => void
    toggleShowCard: () => void
    person_Id: number
  }

interface verifyTokenCredentialsProps {
    email: string;
    validationToken: string;
}

interface ManageTabletsDataTypes {
    tablet_id: number | undefined;
    patient_id: number | undefined;
    treatment_time: number | undefined;
    treatment_cadence: number | undefined;
    operation: string | undefined;
}

interface TabletsTypes {
    id: number;
    patient_id: number;
    treatment_time: number;
    treatment_cadence: number;
}

interface CreateTabletServiceProps {
    patient_id: number | undefined;
    treatment_time: number | undefined;
    treatment_cadence: number | undefined;
}

interface UpdateTabletServiceProps {
    id: number | undefined;
    patient_id: number | undefined;
    treatment_time: number | undefined;
    treatment_cadence: number | undefined;
}