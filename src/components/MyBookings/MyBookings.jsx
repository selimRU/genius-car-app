import { useLoaderData } from "react-router-dom";
import BookingCard from "./BookingCard";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../AuthProvider/AuthProvider";


const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(DataContext)
    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        < div >
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </thead>
                    {
                        bookings?.map(booking => <BookingCard
                            key={booking._id}
                            booking={booking}
                        ></BookingCard>)
                    }
                </table>
            </div>
        </div >
    );
};

export default MyBookings;