import axios from "axios";
const URL = 'http://localhost:8080/auth';


export const signin = (username, password) => {
    const signinInfo = {
        username,
        password
    };
    return axios.post(URL + '/sign-in', signinInfo).then(res => {
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    });
};


export const signout = () => {
    localStorage.removeItem('user');
};


export const signup = (username, email, password) => {
    const signupInfo = {
        username,
        email,
        password
    };
    return axios.post(URL + '/sign-up', signupInfo);
};


export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

