import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/signUp/Singup";
import Main from "../Layout/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])