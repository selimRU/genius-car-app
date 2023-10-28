import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../AuthProvider/AuthProvider';
import ServiceFacilities from './ServiceFacilities';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ServiceDetails = () => {
    const { id } = useParams()
    console.log(id);
    const { services } = useContext(DataContext)
    console.log(services);
    const service = services.find(service => service._id === id)
    console.log(service);
    return (
        <div className=' flex flex-col md:flex-row lg:flex-row gap-10'>
            <div className=' lg:w-[80%] space-y-3'>
                <img className=' w-full' src={service?.img} alt="" />
                <h3>{service?.title}</h3>
                <p className='s'>{service?.description}</p>
                <div className=' grid md:grid-cols-2 lg:grid-cols-2 items-center justify-between gap-5'>
                    {
                        service?.facility.map((facility, index) => <ServiceFacilities
                            key={index}
                            facility={facility}
                        ></ServiceFacilities>)
                    }
                </div>
            </div>
            <div className=' lg:w-[20%] rounded-md space-y-4'>
                <h4 className=' px-4 text-xl font-semibold'>Services</h4>
                <div className='bg-slate-500 p-3 rounded-md '>
                    {
                        services?.map(service => <div key={service._id}>
                            <div className=' flex justify-between items-center bg-[#FFF] my-3 mx-2 p-2 rounded-md'>
                                <h3 className=' font-semibold'>{service.title}</h3>
                                <Link className=' text-[#FF3811]' to={`/services`}>
                                    <AiOutlineArrowRight />
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
                <div className=' flex flex-col gap-3 items-center'>
                    <h4>{service?.price}</h4>
                    <Link to={`/checkout/${id}`} className=' text-[#FFf] bg-[#FF3811] w-full rounded-md py-3 text-center'>
                        <button >Proceed Checkout</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;