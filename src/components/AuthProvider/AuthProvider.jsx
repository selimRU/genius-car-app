import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext()
const AuthProvider = ({ children }) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })

    }, [])

    const values = {
        services
    }
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};

export default AuthProvider;