import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "../nav/nav";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import SignIn from "../pages/sign in/sign in";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Nav/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}