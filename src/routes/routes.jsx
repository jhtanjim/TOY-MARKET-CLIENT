import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/Shared/AddToys/AddToys";
import AllToys from "../Pages/Shared/AllToys/AllToys";
import Blogs from "../Pages/Shared/Blogs/Blogs";

import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToys from "../Pages/Shared/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../Pages/Shared/NotFound/NotFound";
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
                element: <PrivateRoutes>
                    <AddToys></AddToys>
                </PrivateRoutes>

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
                loader: ({ params }) => fetch(`https://toy-store-server-one.vercel.app/alltoy/${params.id}`)
            },
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>

            },
            {
                path: '/alltoy',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-store-server-one.vercel.app/alltoy')
            },

            {
                path: '/toy/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toy-store-server-one.vercel.app/toyCategory/${params.id}`)
                ,

            },




            // 404 




        ],
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;