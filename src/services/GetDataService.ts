
import axios from "axios";
import { authorizationHeader, baseUrl } from "../utils/Constants";


const getRoutines = async () => {
    try {
        const response = await axios.get(`${baseUrl}routines`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const getPatients = async () => {
    try {
        const response = await axios.get(`${baseUrl}patients`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const checkEmailExists = async (email: string) => {
    try {
        const response = await axios.get(`${baseUrl}user_management/checkEmail/${email}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getUsers = async () => {
    try {
        const response = await axios.get(`${baseUrl}users`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const getExercisesByRoutineName = async (routineName: string) => {
    try {
        const response = await axios.get(`${baseUrl}routine_management/getExercisesFromRoutine/${routineName}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const checkHasRoutine = async (patientId: number | undefined) => {
    try {
        if(patientId === undefined) {
            console.error("Patient ID is undefined");
            return;
        }
        const response = await axios.get(`${baseUrl}routine_management/checkHasRoutine/${patientId}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getRoutineById = async (routineId:number) => {
    try {
        const response = await axios.get(`${baseUrl}routine_management/getRoutineById/${routineId}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const getExerciseById = async (exerciseId: string) => {
    try {
        const response = await axios.get(`${baseUrl}routine_management/getExerciseById/${exerciseId}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const getAllExercises = async () => {
    try {
        const response = await axios.get(`${baseUrl}exercises`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

export default { getExerciseById, getAllExercises, getRoutineById, getPatients, checkEmailExists, getUsers, getRoutines, getExercisesByRoutineName, checkHasRoutine }

