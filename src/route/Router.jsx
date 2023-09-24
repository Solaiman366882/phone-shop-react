import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Favorites from "../pages/Favorites/Favorites";
import Error from "../pages/Error/Error";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";

const myCreatedRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('./phones.json')
            },
            {
                path:"/favorites",
                element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/phones/:id",
                element:<PhoneDetails></PhoneDetails>,
                loader:() => fetch('./phones.json')
            }
        ]
    }
]);

export default myCreatedRouter;