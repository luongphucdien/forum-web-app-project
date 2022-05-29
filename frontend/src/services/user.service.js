import axios from "axios";
import authHeader from './auth-header';

const URL = 'http://localhost:8080/content';

export const getPublicContent = () => {
    return axios.get(URL + '/public');
};


export const getUserThreads = () => {
    return axios.get(URL + '/user', { headers: authHeader() }).then((res) => {
        console.log(res.data);
        return res.data;
    });
}