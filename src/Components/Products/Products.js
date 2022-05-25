import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import Product from './Product';

const Products = () => {

    const { data: products, isLoading } = useQuery("allProducts", () => fetch("https://credible-technologies.herokuapp.com/all-products")
        .then(res => res.json()));

    if (isLoading) {
        <Loading />
    }

    return (
        <section className='lg:px-24 px-3 mb-28'>

            <PageTitle title="Products" />

            {
                products?.length === 0 ?

                    <Loading />

                    :

                    <>
                        <h1 className='text-primary text-center text-4xl font-semibold my-14'>Our Products</h1>

                        <div className='grid lg:grid-cols-2 gap-7'>
                            {
                                products?.map(p => <Product key={p._id} eachProduct={p} />)
                            }
                        </div>
                    </>
            }
        </section>
    );
};

export default Products;