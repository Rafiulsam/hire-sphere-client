import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import ApplyJob from "../pages/ApplyJob";
import PrivateRoute from "../Routes/PrivateRoute";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: 'applyJob/:id',
                element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
              
            },
            {
                path: 'my-applications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>

            },
            {
                path: 'add-jobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'signin',
                Component: SignIn
            }
        ]
    }
])

export default router;