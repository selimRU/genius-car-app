import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/assets/logo.svg'
import { useContext } from 'react';
import { DataContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user,logOut } = useContext(DataContext)
    const links = <div className=' flex flex-col md:flex-col lg:flex-row gap-4 items-center text-base font-semibold'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/bookings'}>My Bookings</NavLink>
    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {user ?
                    <button onClick={logOut} className='btn text-red-400'>LogOut</button>
                    :
                    <Link to={'/login'}><button className='btn text-red-400'>LogIn</button></Link>
                }
                <button className="btn hidden lg:block md:hidden text-red-400">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;