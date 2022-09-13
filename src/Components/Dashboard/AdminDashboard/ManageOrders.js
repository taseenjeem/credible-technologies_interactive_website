import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import OrderRow from './OrderRow';

const ManageOrders = () => {

    const { data: allOrders, isLoading, refetch } = useQuery("allOrders", () => fetch("https://credible-technologies.herokuapp.com/ordered-products")
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='lg:px-16 px-3 mb-24'>
            <h1 className='text-center text-2xl font-semibold my-10'>Orders from Customers : {allOrders?.length}</h1>

            <div className='grid lg:grid-cols-2 gap-16'>

                {
                    allOrders?.map(order => <OrderRow
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