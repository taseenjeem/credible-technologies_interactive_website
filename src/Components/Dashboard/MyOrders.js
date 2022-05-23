import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import OrderedProduct from './OrderedProduct';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-orders?customerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

    console.log(orders);

    return (
        <section className='lg:px-20 px-3'>
            <h1 className='text-center text-2xl font-semibold my-4'>Your Orders : {orders.length}</h1>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">
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