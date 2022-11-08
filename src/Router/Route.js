import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/signUp/Singup";
import Main from "../Layout/Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
    }
])