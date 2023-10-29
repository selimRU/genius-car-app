
import BookingCard from "./BookingCard";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const MyBookings = () => {
    const { user } = useContext(DataContext)

    const [bookings, setBookings] = useState([])
    console.log(bookings);
    console.log(user);
    const url = `http://localhost:5000/cart?email=${user?.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
        // if (user?.email) {
        //     fetch(`http://localhost:5000/cart?email=${user?.email}`)
        //         .then(res => res.json())
        //         .then(data => setBookings(data))
        // }

    }, [url])

    return (
        < div >
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>CustomerName</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(booking => <BookingCard
                                key={booking._id}
                                booking={booking}
                            ></BookingCard>)
                        }
                    </tbody>

                </table>
            </div>
            {/* <table>
               
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th c>Price</th>
                        <th>Email</th>
                    </tr>
                </thead>
                
            </table> */}

        </div >
    );
};

export default MyBookings;