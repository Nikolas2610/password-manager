import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";
import { selectUser } from "../store/user/reducer/userSlice";

const useAuth = () => {
    const isUserLogged = useSelector(selectUser);
    return isUserLogged;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;