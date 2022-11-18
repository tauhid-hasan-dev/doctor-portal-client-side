import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Pages/AllUsers/AllUsers";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import MyAppointment from "../Pages/Appointment/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Pages/Layouts/DashboardLayout";
import Main from "../Pages/Layouts/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default router;