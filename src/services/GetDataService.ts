
import axios from "axios";
import { baseUrl } from "../utils/Constants";


const getRoutines = async () => {
    try {
        const response = await axios.get(`${baseUrl}routines`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const getPatients = async () => {
    try {
        const response = await axios.get(`${baseUrl}patients`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const checkEmailExists = async (email: string) => {
    try {
        const response = await axios.get(`${baseUrl}user_management/checkEmail/${email}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getUsers = async () => {
    try {
        const response = await axios.get(`${baseUrl}users`);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const getExercisesByRoutineName = async (routineName: string) => {
    try {
        const response = await axios.get(`${baseUrl}routine_management/getExercisesFromRoutine/${routineName}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const checkHasRoutine = async (patientId: string) => {
    try {
        const response = await axios.get(`${baseUrl}routine_management/checkHasRoutine/${patientId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getRoutineById = async (routineId:number) => {
    try {
        const response = await axios.get(`${baseUrl}routine_management/getRoutineById/${routineId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const getExerciseById = async (exerciseId:number) => {
    try {
        const response = await axios.get(`${baseUrl}exercise_management/getExerciseById/${exerciseId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const getAllExercises = async () => {
    try {
        const response = await axios.get(`${baseUrl}exercises`);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

export default { getExerciseById, getAllExercises, getRoutineById, getPatients, checkEmailExists, getUsers, getRoutines, getExercisesByRoutineName, checkHasRoutine }

