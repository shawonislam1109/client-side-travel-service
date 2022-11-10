import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Review from "../Component/Review/Review";
import Signup from "../Component/signUp/Singup";
import Update from "../Component/Update/Update";
import Main from "../Layout/Main";
import AddService from "../Shared/AllService/Addservice/Addservice";
import AllService from "../Shared/AllService/AllService";
import SingleService from "../Shared/Myservice/SingleService";

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
            },
            {
                path: '/SingleService/:id',
                element: <SingleService />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/service',
                element: <AllService></AllService>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/review',
                element: <PrivateRoute><Review /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/review/:id',
                element: <Update />,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])