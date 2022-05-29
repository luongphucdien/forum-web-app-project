import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "../nav/nav";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import SignIn from "../pages/sign in/sign in";
import Post from "../pages/post/post"
import PrivateRoute from "./private route";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Nav/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<PrivateRoute Component={SignIn}/>} />
                    <Route path="/register" element={<PrivateRoute Component={Register}/>} />
                    <Route path="/creatingpost" element={<PrivateRoute Component={Post}/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}