import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "../nav/nav";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import SignIn from "../pages/sign in/sign in";
import Post from "../pages/post/post"
import PrivateRoute from "./private route";
import Comment from "../pages/comment/comment";
import UserPage from "../pages/user_page/user_page";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Nav/>
            <div>
                <Routes>
                    <Route path="/" element={<PrivateRoute Component={Home}/>} />
                    <Route path="/login" element={<SignIn/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/creatingpost" element={<PrivateRoute Component={Post}/>} />
                    <Route path="/:thread_id/comment" element={<PrivateRoute Component={Comment}/>}/>
                    <Route path="/:username/:thread_id/comment" element={<PrivateRoute Component={Comment}/>}/>
                    <Route path="/:username" element={<PrivateRoute Component={UserPage}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}