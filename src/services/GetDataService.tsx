
import axios from "axios";
import { baseUrl } from "../utils/Constants";

/*
const getRoutinesFromId = async (id: string) => {

}
*/

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

export default { getPatients, checkEmailExists, getUsers }

