
import ServiceCard from "./ServiceCard";
import { useContext, useEffect } from "react";
import { DataContext } from "../AuthProvider/AuthProvider";


const Services = () => {
    const { services } = useContext(DataContext)
    console.log(services);
    return (
        <div>
            <div className=" text-center space-y-3">
                <h3 className=" text-[#FF3811] text-base">Services</h3>
                <h2 className=" text-2xl lg:text-5xl font-semibold">Our Service Area</h2>
                <p className=" text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                {
                    services?.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;