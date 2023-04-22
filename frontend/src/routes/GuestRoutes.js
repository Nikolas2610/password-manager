import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectUser } from "../store/user/reducer/userSlice";
import Dashboard from "../pages/protected/Dashboard";

const useAuth = () => {
    const isUserLogged = useSelector(selectUser);
    return isUserLogged;
}

const GuestRoutes = () => {
    const isAuth = useAuth();
    return !isAuth ? <Outlet /> : <Dashboard />;
}

export default GuestRoutes;