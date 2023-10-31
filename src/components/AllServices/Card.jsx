import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const { _id, description, img, price, service_id, title } = service
    return (
        <div className="card bg-base-100 shadow-xl py-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[250px] h-[150px]" />
            </figure>
            <div className=" flex justify-evenly items-center">
                <div>
                    <h2 className="card-title text-2xl font-semibold">{title}</h2>
                    <p className=" text-[#FF3811]">{price}</p>
                </div>
                <div className=' text-[#FF3811]'>
                    <Link to={`/servicesDetails/${_id}`}>
                        <AiOutlineArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Card;