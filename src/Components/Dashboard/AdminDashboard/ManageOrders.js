import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import OrderRow from './OrderRow';

const ManageOrders = () => {

    const { data: allOrders, isLoading, refetch } = useQuery("allOrders", () => fetch("http://localhost:5000/ordered-products")
        .then(res => res.json())
    )

    if (isLoading) {
        <Loading />
    }

    console.log(allOrders);

    return (
        <section className='lg:px-16 px-3 mb-24'>
            <h1 className='text-center text-2xl font-semibold my-4'>Orders : {allOrders?.length}</h1>

            <div className='grid lg:grid-cols-3 gap-6'>

                {
                    allOrders.map(order => <OrderRow
                        key={order._id}
                        order={order}
                        refetch={refetch}
                    />)
                }

            </div>

        </section>
    );
};

export default ManageOrders;