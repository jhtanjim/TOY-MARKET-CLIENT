import { createBrowserRouter, useRouteLoaderData } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/Shared/AddToys/AddToys";
import Updatetoys from "../Pages/Shared/Updatetoys/Updatetoys";
import AllToys from "../Pages/Shared/AllToys/AllToys";
import Blogs from "../Pages/Shared/Blogs/Blogs";

import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyToys from "../Pages/Shared/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../Pages/Shared/Update/Update";
import NotFound from "../Pages/Shared/NotFound/NotFound";

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
                loader: () => fetch('https://toy-store-server-one.vercel.app/alltoy')
            },

            {
                path: '/toy/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toy-store-server-one.vercel.app/toyCategory/${params.id}`)
                ,

            },

            {
                path: '/mytoys',
                element: <PrivateRoutes>

                    <MyToys></MyToys>
                </PrivateRoutes>,
            },


            // 404 
            {
                path: '*',
                element: <NotFound />
            },



        ],
    },
]);

export default router;