import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Navbar = ({ children }) => {
    return (

        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-100 lg:px-24 shadow-2xl">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 lg:px-2 lg:mx-2"><Link to="/" className="btn btn-ghost normal-case lg:text-2xl"><img className='w-9 mr-2' src={logo} alt="" />Credible Technologies Ltd.</Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li className='mx-1'><NavLink className="rounded-3xl" to="/home">HOME</NavLink></li>
                            <li className='mx-1'><NavLink className="rounded-3xl" to="/products">PRODUCTS</NavLink></li>
                        </ul>
                    </div>

                    <Link to="/login" className="btn btn-neutral ml-3">LOG IN</Link>

                </div>


                {children}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li className='my-2'><NavLink to="/">Sidebar Item 1</NavLink></li>
                    <li className='my-2'><NavLink to="/">Sidebar Item 2</NavLink></li>

                </ul>

            </div>
        </div>

    );
};

export default Navbar;