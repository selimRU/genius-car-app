import axios from "axios";
import { useContext, useEffect } from "react";
import { DataContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})


const AxiosSecure = () => {
    const { logOut } = useContext(DataContext)
    const navigate = useNavigate()
    useEffect(() => {
        instance.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(res => {
                        navigate('/login')
                    })
                    .catch(console.log(error))
            }

        })
    }, [])

    return instance
};

export default AxiosSecure;