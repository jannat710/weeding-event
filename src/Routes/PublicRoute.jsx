import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import Login from "../components/Auth/Login/Login";
import Photography from "../pages/Photography/Photography";
import Rsvp from "../pages/RSVP/RSVP";
import Register from "../components/Auth/Register/Register";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../components/Error/ErrorPage";
import Servicedetail from "../components/Services/Servicedetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/services.json')
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader:()=>fetch('/services.json') 
            },
            {
                path:"/services/:details",
                element:<Servicedetail></Servicedetail>,
                loader:()=>fetch('/services.json') 
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/photography",
                element: <Photography></Photography>
            },
            {
                path: "/rsvp",
                element: <Rsvp></Rsvp>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;