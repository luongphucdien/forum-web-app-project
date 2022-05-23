import axios from "axios";
import authHeader from './auth-header';

const URL = '/content';

export const getPublicContent = () => {
    return axios.get(URL + '/all');
};


export const getUserThreads = () => {
    return axios.get(URL + '/user', { headers: authHeader() });
}