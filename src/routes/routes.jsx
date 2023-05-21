import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/Shared/AddToys/AddToys";
import Updatetoys from "../Pages/Shared/Updatetoys/Updatetoys";
import AllToys from "../Pages/Shared/AllToys/AllToys";
import Blogs from "../Pages/Shared/Blogs/Blogs";
import FourOfournotFound from "../Pages/Shared/fourOfournotFound/FourOfournotFound";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToys from "../Pages/Shared/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../Pages/Shared/Update/Update";

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
                path: '/alltoy',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/alltoy')
            },

            {
                path: '/toy/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails>
                </PrivateRoutes>,
                loader: ({ params }) => { console.log(params.id); return fetch(`http://localhost:5000/toy/${params.id}`) },

            },

            {
                path: '/mytoys',
                element: <PrivateRoutes>

                    <MyToys></MyToys>
                </PrivateRoutes>,
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => { console.log(params.id); return fetch(`http://localhost:5000/toy/${params.id}`) }


            },

            // 404 
            {
                path: '*',
                element: <FourOfournotFound></FourOfournotFound>

            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>

            }


        ],
    },
]);

export default router;