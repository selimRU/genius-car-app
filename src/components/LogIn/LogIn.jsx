import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const LogIn = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { logIn } = useContext(DataContext)
    const handleLogIn = (e) => {
        e.preventDefault()
        logIn(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error);
            })

        axios.post('http://localhost:5000/jwt', email, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm p-3 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className=' text-center'>New here? <Link to={'/signup'}><span className=" ml-5 text-blue-600 underline">Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;