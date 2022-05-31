import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "../nav/nav";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import SignIn from "../pages/sign in/sign in";
import Post from "../pages/post/post"
import PrivateRoute from "./private route";
import Comment from "../pages/comment/comment";
import Your_Thread from "../pages/your_thread/your_thread";

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
                    <Route path="/your-thread" element={<PrivateRoute Component={Your_Thread}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}