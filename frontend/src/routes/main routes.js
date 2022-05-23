import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/home";
import SignIn from "../pages/sign in/sign in";

export default function MainRoutes() {
    return (
        <BrowserRouter>
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