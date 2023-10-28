import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../Services/Services";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

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
                element: <Home></Home>
            },
        ]
    }
])

export default router;