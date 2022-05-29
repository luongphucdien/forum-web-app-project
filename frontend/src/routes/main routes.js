import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "../Nav/Nav";
import Home from "../pages/home/home";
import SignIn from "../pages/sign in/sign in";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Nav/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/sign-up" element={""} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}