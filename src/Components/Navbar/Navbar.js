import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (

        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-100 lg:px-24 shadow-2xl">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2"><Link to="/" class="btn btn-ghost normal-case text-2xl">Credible Technologies Ltd.</Link></div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li className='mx-1'><NavLink className="rounded-3xl" to="/home">HOME</NavLink></li>
                            <li className='mx-1'><NavLink className="rounded-3xl" to="/products">PRODUCTS</NavLink></li>
                        </ul>
                    </div>

                    <Link to="/login" class="btn btn-neutral ml-3">LOG IN</Link>

                </div>


                {children}

            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li className='my-2'><NavLink to="/">Sidebar Item 1</NavLink></li>
                    <li className='my-2'><NavLink to="/">Sidebar Item 2</NavLink></li>

                </ul>

            </div>
        </div>

    );
};

export default Navbar;