import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMdOptions } from 'react-icons/io';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import PageTitle from '../PageTitle/PageTitle';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);

    return (
        <div>

            <PageTitle title="Dashboard" />

            <div class="drawer drawer-end drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <h1 className="text-center flex items-center justify-center text-primary font-bold text-4xl mt-6 underline underline-offset-2">Dashboard<label for="my-drawer-2" class="btn ml-3 btn-outline drawer-button lg:hidden"><IoMdOptions className='text-xl' /></label> </h1>


                    <Outlet></Outlet>

                </div>
                <div class="drawer-side shadow-2xl">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    {
                        admin ?
                            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                <li><Link to="/dashboard/manage-all-orders">Manage Orders</Link></li>
                                <li><Link to="/dashboard/add-product">Add a Product</Link></li>
                                <li><Link to="/dashboard/manage-all-products">Manage products</Link></li>
                                <li><Link to="/dashboard/all-users">All Users</Link></li>

                            </ul>
                            :
                            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                <li><Link to="/dashboard">My Orders</Link></li>
                                <li><Link to="/dashboard/add-review">Add a Reviews</Link></li>
                                <li><Link to="/dashboard/my-profile">My Profile</Link></li>

                            </ul>
                    }

                </div>
            </div>
        </div>
    );
};

export default Dashboard;