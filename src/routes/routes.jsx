import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/Shared/AddToys/AddToys";
import Updatetoys from "../Pages/Shared/Updatetoys/Updatetoys";
import AllToys from "../Pages/Shared/AllToys/AllToys";
import Blogs from "../Pages/Shared/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>

            },
            {
                path: '/addtoys',
                element: <AddToys></AddToys>

            },
            {
                path: '/updatetoys',
                element: <Updatetoys></Updatetoys>

            },
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>

            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toy')
            }


        ],
    },
]);

export default router;