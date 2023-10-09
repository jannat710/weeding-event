import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Services from "../components/Services/Services";
import Login from "../components/Auth/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);

export default router;