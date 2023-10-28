import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Services/Services";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import CheckOut from "../CheckOut/CheckOut";
import MyBookings from "../MyBookings/MyBookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Home></Home>
            },
            {
                path: '/servicesDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <MyBookings></MyBookings>,
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])

export default router;