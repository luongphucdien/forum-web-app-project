import axios from "axios";
const URL = 'http://localhost:8080/auth';


export const signin = (username, password) => {
    const signinInfo = {
        username,
        password
    };
    return axios.post(URL + '/sign-in', signinInfo).then(res => {
        if (res.data.accessToken) {
            localStorage.setItem('user', res.data.username);
            localStorage.setItem('token', res.data.accessToken);
        }
    });
};


export const signout = () => {
    localStorage.removeItem('user');
};


export const signup = (name, username, password) => {
    const signupInfo = {
        name,
        username,
        password
    };
    // return axios.post(URL + '/sign-up', signupInfo);
};


export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

