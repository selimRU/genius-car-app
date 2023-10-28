

const ServiceFacilities = ({ facility }) => {
    const { details, name } = facility
    return (
        <div className=" bg-slate-200 rounded-md py-5">
            <div className="w-[70%] mx-auto">
                <h3 className=" text-2xl">{name}</h3>
                <p className="  text-[#737373]">{details}</p>
            </div>
        </div>
    );
};

export default ServiceFacilities;