import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        throw error;
    }
};

export const addUser = async (userData) => {
    try {
        await axios.post(API_URL, userData);
        return userData;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${API_URL}/${userId}`);
        return userId;
    } catch (error) {
        throw error;
    }
}