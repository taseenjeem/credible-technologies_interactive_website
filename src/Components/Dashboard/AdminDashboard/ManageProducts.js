import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import PageTitle from '../../PageTitle/PageTitle';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery("manageProducts", () => fetch("https://credible-technologies.herokuapp.com/all-products")
        .then(res => res.json()));

    if (isLoading) {
        <Loading />
    }

    return (
        <section className='lg:px-24 px-3 mb-28'>

            <PageTitle title="Manage-products" />

            <h1 className='text-center text-2xl font-semibold my-4'>Manage Products ({products.length})</h1>

            <div className='grid lg:grid-cols-2 gap-7'>
                {
                    products?.map(p => <ManageProduct key={p._id} product={p} />)
                }
            </div>
        </section>
    );
};

export default ManageProducts;