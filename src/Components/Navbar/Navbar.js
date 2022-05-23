import { signOut } from 'firebase/auth';
import React from 'react';
import '../../App.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import auth from '../../Firebase/firebase.init';
import profile from '../../Assets/Icons/profile-user.png';
import { toast } from 'react-toastify';

const Navbar = ({ children }) => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        toast.success("Logout successful");
    };

    return (

        <section className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-100 lg:px-24 shadow-2xl">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 lg:px-2 lg:mx-2"><Link to="/" className="btn btn-ghost normal-case lg:text-2xl text-xl font-bold"><img className='w-9 mr-2 App-logo' src={logo} alt="" />Credible Technologies Ltd.</Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li className='mx-1'><NavLink className="rounded-3xl" to="/home">HOME</NavLink></li>
                            <li className='mx-1'><NavLink className="rounded-3xl" to="/products">PRODUCTS</NavLink></li>
                        </ul>
                    </div>

                    {!user ? <Link to="/login"><button className="btn btn-neutral ml-3 hidden lg:block">LOG IN</button></Link> :
                        <div class="dropdown dropdown-end hidden lg:block">
                            <label tabindex="0" class="m-1">
                                <div class="avatar online">
                                    <div class="w-10 rounded-full">
                                        <img src={user.photoURL ? user.photoURL : profile} alt='' />
                                    </div>
                                </div>
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-64">
                                <li className='my-2 text-center'>{user?.displayName}</li>
                                <li><label for="logout-btn" class="btn text-white modal-button">Log Out</label></li>
                            </ul>

                            {/* <!-- The button to open modal --> */}


                            {/* <!-- Put this part before </body> tag --> */}
                            <input type="checkbox" id="logout-btn" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <label for="logout-btn" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="font-bold text-lg">{user?.displayName}, are you sure for logout?</h3>
                                    <div class="modal-action">
                                        <button for="logout-btn" onClick={() => logout()} class="btn btn-neutral hidden lg:block">Log out</button>
                                    </div>
                                </div>
                            </div>

                        </div>}

                </div>
                {/* <button onClick={() => logout()} className="btn text-white  ml-3 hidden lg:block">LOG OUT</button> */}

                {children}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li className='my-2'><NavLink to="/">Sidebar Item 1</NavLink></li>
                    <li className='my-2'><NavLink to="/">Sidebar Item 2</NavLink></li>
                    {!user ? <Link to="/login"><button to="/login" className="btn btn-neutral w-full">LOG IN</button></Link> : <button onClick={() => logout()} className="btn btn-neutral w-full">LOG OUT</button>}
                </ul>


            </div>
        </section>

    );
};

export default Navbar;