import { signOut } from 'firebase/auth';
import React from 'react';
import '../../App.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import auth from '../../Firebase/firebase.init';
import profile from '../../Assets/Icons/profile-user.png';
import { toast } from 'react-toastify';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate("/");
        toast.success("Logout successful");
    };

    return (

        <div className="navbar bg-white fixed top-0 z-50 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/home">Home</NavLink></li>
                        <li className='mx-1 mt-2'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/products">Products</NavLink></li>
                        <li className='mx-1 mt-2'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/reviews">Reviews</NavLink></li>
                        <li className='mx-1 mt-2'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/about-us">About Us</NavLink></li>
                        <li className='mx-1 mt-2'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/contact-us">Contact Us</NavLink></li>
                        {
                            user && <li className='mx-1 mt'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/dashboard">Dashboard</NavLink></li>
                        }

                        {!user ? <Link to="/login"><button to="/login" className="btn mt-2 btn-neutral w-full">LOG IN</button></Link> : <label htmlFor="logout-btn-2" className="btn mt-2 text-white modal-button">Log Out</label>}
                    </ul>
                </div>
                <Link to="/" className="flex items-center p-2 normal-case lg:text-2xl text-xl font-bold" style={{ fontFamily: "Ubuntu" }}><img className='w-9 mr-2 App-logo' src={logo} alt="" />Credible Technologies Ltd.</Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/home">Home</NavLink></li>
                        <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/products">Products</NavLink></li>
                        <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/reviews">Reviews</NavLink></li>
                        <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/about-us">About Us</NavLink></li>
                        <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/contact-us">Contact Us</NavLink></li>
                        {
                            user && <li className='mx-1'><NavLink className="rounded-3xl font-semibold focus:text-white" to="/dashboard">Dashboard</NavLink></li>
                        }
                    </ul>
                </div>
                {!user ? <Link to="/login"><button className="btn btn-neutral ml-3 hidden lg:block text-white">LOG IN</button></Link> :
                    <div className="dropdown dropdown-end hidden lg:block">
                        <label tabIndex="0" className="m-1">
                            <div className="avatar online">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : profile} alt='' />
                                </div>
                            </div>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-64">
                            <li className='my-2 text-center'>{user?.displayName}</li>
                            <li><label htmlFor="logout-btn" className="btn text-white modal-button">Log Out</label></li>
                        </ul>

                        <input type="checkbox" id="logout-btn" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <label htmlFor="logout-btn" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="font-bold text-lg">{user?.displayName}, are you sure for logout?</h3>
                                <div className="modal-action">
                                    <button htmlFor="logout-btn" onClick={() => logout()} className="btn btn-neutral hidden lg:block">Log out</button>
                                </div>
                            </div>
                        </div>

                    </div>}
            </div>
        </div>

    );
};

export default Navbar;