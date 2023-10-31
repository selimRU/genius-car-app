import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";



const AllServices = () => {
    const [services, setServices] = useState([])
    const [totalItemPerPage, setTotalItemPerPage] = useState(2)
    const [pageNumber, setPageNumber] = useState(0)
    console.log(pageNumber);
    const totalCount = useLoaderData()
    const { count } = totalCount
    const pages = Math.ceil(count / totalItemPerPage)
    console.log(pages);
    useEffect(() => {
        axios.get(`http://localhost:5000/services?page=${pageNumber}&size=${totalItemPerPage}`)
            .then(res => {
                setServices(res.data)
            })

    }, [pageNumber, totalItemPerPage])

    const handlePerPage = (e) => {
        const val = parseInt(e.target.value)
        setTotalItemPerPage(val)
        setPageNumber(0)
    }
    const handlePrev = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1)
        }
    }
    const handleNext = () => {
        console.log(pages);
        if (pageNumber < pages - 1) {
            setPageNumber(pageNumber + 1)
        }
    }

    return (
        <div>
            <div className=" text-center space-y-3">
                <h3 className=" text-[#FF3811] text-base">Services</h3>
                <h2 className=" text-2xl lg:text-5xl font-semibold">Our Service Area</h2>
                <p className=" text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised<br /> words which don't look even slightly believable. </p>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                {
                    services?.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
            </div>
            <div className=" flex gap-10 my-8 justify-center items-center">
                <div className="flex gap-4">
                    <button onClick={handlePrev}>Prev</button>
                    <div>
                        {
                            [...Array(pages).keys()].map(page => <button
                                onClick={(e) => setPageNumber(page)}
                                className={`mr-5 px-3 rounded-md ${pageNumber === page ? 'bg-red-400' : ''}`}
                                key={page}>{page}</button>)
                        }
                    </div>
                    <button onClick={handleNext}>Next</button>
                </div>
                <div>
                    <select onClick={handlePerPage} name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default AllServices;