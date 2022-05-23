import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-orders?customerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold my-4'>Your Orders : {orders.length}</h1>
        </div>
    );
};

export default MyOrders;