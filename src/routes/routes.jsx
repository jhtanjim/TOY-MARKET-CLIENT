import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/Shared/AddToys/AddToys";
import Updatetoys from "../Pages/Shared/Updatetoys/Updatetoys";

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

            }


        ],
    },
]);

export default router;