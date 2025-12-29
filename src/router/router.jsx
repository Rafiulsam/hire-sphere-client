import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:"/",
        Component: RootLayout,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'register',
                Component: Register
            },
            {
                path:'signin',
                Component: SignIn
            }
        ]
    }
])

export default router;