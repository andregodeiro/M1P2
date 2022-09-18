import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/components/Pages/Home/Home";
import Login from "../src/components/Pages/Login/Login";
import SignUp from "../src/components/Pages/SignUp/SignUp";

export const LabRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
