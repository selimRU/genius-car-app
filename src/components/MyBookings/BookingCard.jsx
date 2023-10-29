import React from 'react';

const BookingCard = ({ booking }) => {
    const { email, photo, price, date, service,customer_name } = booking
    return (
        <tr>
            <td>
                <img className=' w-[200px]' src={photo} alt="" />
            </td>
            <td>
                <div className="">
                    <div>
                        <div className="font-bold">{customer_name}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>
                {email}
            </td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-secondary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default BookingCard;