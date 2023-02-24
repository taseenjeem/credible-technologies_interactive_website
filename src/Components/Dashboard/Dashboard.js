import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMdOptions } from 'react-icons/io';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../PageTitle/PageTitle';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    const { data, isLoading } = useQuery('admin', () => fetch(`https://credible-technologies-server.onrender.com/admin/${user?.email}`,
        {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    console.log(data);

    if (isLoading) {
        <Loading />
    }

    return (
        <div>

            <PageTitle title="Dashboard" />

            <div className="drawer drawer-end drawer-mobile mt-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <h1 className="text-center flex items-center justify-center text-primary font-bold text-4xl mt-6 underline underline-offset-2">Dashboard<label htmlFor="my-drawer-2" className="btn ml-3 btn-outline drawer-button lg:hidden"><IoMdOptions className='text-xl' /></label> </h1>


                    <Outlet></Outlet>

                </div>
                <div className="drawer-side shadow-2xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {
                        data?.admin ?
                            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                <li><Link to="/dashboard/">Overview</Link></li>
                                <li className='mt-2'><Link to="/dashboard/manage-all-orders">Manage Orders</Link></li>
                                <li className='mt-2'><Link to="/dashboard/add-product">Add a Product</Link></li>
                                <li className='mt-2'><Link to="/dashboard/manage-all-products">Manage products</Link></li>
                                <li className='mt-2'><Link to="/dashboard/all-users">All Users</Link></li>
                                <li className='mt-2'><Link to="/dashboard/my-profile">My Profile</Link></li>

                            </ul>
                            :
                            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                <li className='mt-2'><Link to="/dashboard/">My Orders</Link></li>
                                <li className='mt-2'><Link to="/dashboard/add-review">Add a Reviews</Link></li>
                                <li className='mt-2'><Link to="/dashboard/my-profile">My Profile</Link></li>
                            </ul>
                    }

                </div>
            </div>
        </div>
    );
};

export default Dashboard;