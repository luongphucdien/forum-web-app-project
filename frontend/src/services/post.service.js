import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./auth.service";
const URL = 'http://localhost:8080';

export const post = (post) => {
    const postInfo = {
        username: getCurrentUser(),
        post: post
    };
    return axios.post(URL + '/post', postInfo).then(res => {
        console.log(postInfo.username)
    });
};