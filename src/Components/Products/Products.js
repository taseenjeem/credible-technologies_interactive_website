import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import Product from './Product';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Products = () => {

    const { data: products, isLoading } = useQuery("allProducts", () => fetch("https://credible-technologies.herokuapp.com/all-products")
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <ScrollToTop>
            <section className='lg:px-24 px-3 mb-28'>

                <PageTitle title="Products" />

                <h1 className='text-primary text-center text-4xl font-semibold my-14'>Our Products</h1>

                <div className='grid lg:grid-cols-3 gap-10'>
                    {
                        products?.map(p => <Product key={p._id} eachProduct={p} />)
                    }
                </div>
            </section>
        </ScrollToTop>
    );
};

export default Products;