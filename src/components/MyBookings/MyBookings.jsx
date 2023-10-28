import { useLoaderData } from "react-router-dom";
import BookingCard from "./BookingCard";


const MyBookings = () => {
    const bookings = useLoaderData()
    return (
        <div>
            {
                bookings?.map(booking => <BookingCard
                    key={booking._id}
                    booking={booking}
                ></BookingCard>)
            }
        </div>
    );
};

export default MyBookings;