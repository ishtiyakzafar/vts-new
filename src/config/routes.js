import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";

// const Home = lazy(() => import("../modules/homepage/HomePage"));
// const Login = lazy(() => import("../modules/login/Login"));


export const routes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "login",
        element: <Login />
    },
];


export const renderRoutes = Object.entries(routes);