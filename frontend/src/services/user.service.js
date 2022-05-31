import axios from "axios";
import authHeader from './auth-header';
import { getCurrentUser } from "./auth.service";

const URL = 'http://localhost:8080/content';

export const deleteThread = (thread_id) => {
    return axios.post(URL + '/delete-thread', thread_id)
}

export const getPublicContent = () => {
    return axios.get(URL + '/public')
};


export const getUserThreads = () => {
    return axios.get(URL + '/user', { headers: authHeader() }).then((res) => {
        console.log(res.data);
        return res.data;
    });
}


export const post = (post) => {
    return axios.get(URL + '/auth', { headers: authHeader() }).then((res) => {
        const postInfo = {
            username: res.data.id,
            post: post
        };
        axios.post(URL + '/post', postInfo);
    })
};


export const addComment = (comment, thread_id) => {
    return axios.get(URL + '/auth', { headers: authHeader() }).then((res) => {
        const commentInfo = {
            username: res.data.id,
            comment: comment,
            thread_id: thread_id
        };
        axios.post(URL + '/comment', commentInfo);
    })
};