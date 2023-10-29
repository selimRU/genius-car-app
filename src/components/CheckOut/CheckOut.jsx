import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { DataContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const CheckOut = () => {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState(null)
    const [message, setMessage] = useState('')
    const { user } = useContext(DataContext)
    const service = useLoaderData()
    const { img, title, price, _id } = service
    const email = user?.email
    const order = {
        service: title,
        email: email,
        phone: phone,
        photo: img,
        message: message,
        date: date,
        price: price,
        customer_name: name,
        service_id: _id
    }
    const handleToCart = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/cart', order,)
            .then((response) => {
                console.log(response.data);
                if (response.data.insertedId) {
                    alert('successfully booked service')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className=' max-w-6xl mx-auto bg-gray-300 py-5'>
            <form onSubmit={handleToCart} className=' max-w-5xl mx-auto '>
                <div className="space-y-12">
                    <div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) => { setName(e.target.value) }}
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) => { setDate(e.target.value) }}
                                        type="date"
                                        name="date"
                                        id="date"
                                        required
                                        autoComplete="given-name"
                                        className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        defaultValue={email}
                                        readOnly
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="given-name"
                                        className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) => { setPhone(e.target.value) }}
                                        required
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="family-name"
                                        className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Image
                            </label>
                            <div className="mt-2">
                                <input
                                    defaultValue={img}
                                    type="text"
                                    name="image"
                                    id="image"
                                    autoComplete="image"
                                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="mt-10 ">
                                <div>
                                    <label htmlFor="about" className=" text-sm font-medium  text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            onChange={(e) => { setMessage(e.target.value) }}
                                            required
                                            id="message"
                                            name="message"
                                            cols={20}
                                            rows={10}
                                            className="px-3 w-full"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className=" w-full bg-[#FF3811] py-3 rounded-md text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;