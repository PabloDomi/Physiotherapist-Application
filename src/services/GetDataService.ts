
import axios from "axios";
import { baseUrl } from "../utils/Constants";
import { authHeader } from "../utils/types";

const authHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

async function GetRoutines() {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const response = await axios.get(`${baseUrl}routines`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const GetPatients = async () => {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const response = await axios.get(`${baseUrl}patients`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const CheckEmailExists = async (email: string) => {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const response = await axios.get(`${baseUrl}user_management/checkEmail/${email}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const GetUsers = async () => {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const response = await axios.get(`${baseUrl}users`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const GetExercisesByRoutineName = async (routineName: string) => {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const response = await axios.get(`${baseUrl}routine_management/getExercisesFromRoutine/${routineName}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const CheckHasRoutine = async (patientId: number | undefined) => {

    const authorizationHeader: authHeader = authHeaders() 

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

const GetRoutineById = async (routineId:number) => {

    const authorizationHeader: authHeader = authHeaders()

    try {
        const response = await axios.get(`${baseUrl}routine_management/getRoutineById/${routineId}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const GetExerciseById = async (exerciseId: string) => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const response = await axios.get(`${baseUrl}routine_management/getExerciseById/${exerciseId}`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const GetAllExercises = async () => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const response = await axios.get(`${baseUrl}exercises`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

const RefreshJWToken = async () => {

    const authorizationHeader: authHeader = authHeaders() 

    try {
        const response = await axios.post(`${baseUrl}Sign/RefreshJWToken`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const GetAccessToken = async (email: string) => {
    
        const authorizationHeader: authHeader = authHeaders() 
    
        try {
            const response = await axios.get(`${baseUrl}Sign/getAccessToken/${email}`, authorizationHeader);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    
}

const GetTablets = async () => {
    const authorizationHeader: authHeader = authHeaders()

    try {
        const response = await axios.get(`${baseUrl}patient_management/getTablets`, authorizationHeader);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default { 
    refreshJWToken: RefreshJWToken, getExerciseById: GetExerciseById, getAllExercises: GetAllExercises, 
    getRoutineById: GetRoutineById, getPatients: GetPatients, checkEmailExists: CheckEmailExists, getUsers: GetUsers, 
    getRoutines: GetRoutines, getExercisesByRoutineName: GetExercisesByRoutineName, checkHasRoutine: CheckHasRoutine,
    getAccessToken: GetAccessToken, getTablets: GetTablets 
}