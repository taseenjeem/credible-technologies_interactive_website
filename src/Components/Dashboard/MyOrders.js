import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import OrderedProduct from './OrderedProduct';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://credible-technologies.herokuapp.com/my-orders?customerEmail=${user?.email}`,
            {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => setOrders(data))

    }, [user, navigate])

    return (
        <section className='lg:px-20 px-3'>
            <h1 className='text-center text-2xl font-semibold my-4'>Your Orders : {orders.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Ordered Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrderedProduct key={order._id} order={order} />)
                        }

                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>

                            <th>Product</th>
                            <th>Ordered Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>

        </section>
    );
};

export default MyOrders;