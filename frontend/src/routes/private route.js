import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/auth.service";



const PrivateRoute = ({ Component }) => {
    const token = getToken();
    const navigate = useNavigate();
    useEffect (() => {
        if (token) {
            return navigate('/');
        }
    }, []);
    return <Component/>
};

export default PrivateRoute;