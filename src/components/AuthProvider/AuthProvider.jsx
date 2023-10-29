import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import axios from 'axios';

export const DataContext = createContext()
const AuthProvider = ({ children }) => {
    const [services, setServices] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false)
            setUser(user)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/services', { withCredentials: true })
            .then(res => {
                setServices(res.data)
            })
        // fetch('http://localhost:5000/services')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setServices(data)
        //     })

    }, [])

    const values = {
        services,
        createUser,
        logIn,
        user,
        logOut
    }
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};

export default AuthProvider;