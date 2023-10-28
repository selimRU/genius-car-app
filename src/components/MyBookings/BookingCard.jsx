import React from 'react';

const BookingCard = ({ booking }) => {
    const { email, img, price, date, title } = booking
    return (
        <div>
            <tbody>
                {/* row 1 */}
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <img src={img} alt="" />
                        </div>
                    </td>
                    <td>
                        <p>{email}</p>
                    </td>
                    <td>
                        <p>{price}</p>
                    </td>
                    <td>
                        <p>{date}</p>
                    </td>
                    <td>
                        <button className="btn btn-ghost btn-xs">Delete</button>
                    </td>
                </tr>
            </tbody>
        </div>
    );
};

export default BookingCard;