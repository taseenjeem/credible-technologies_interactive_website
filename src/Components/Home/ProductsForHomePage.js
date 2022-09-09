import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import HomepageProduct from './HomepageProduct';
import { FaArrowRight } from 'react-icons/fa';

const ProductsForHomePage = () => {

    const { data: products, isLoading } = useQuery("homePageProducts", () => fetch("https://credible-technologies.herokuapp.com/all-products").then(res => res.json()));

    const productsForHomePage = products?.slice(5, 11);

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='lg:px-24 px-3 my-32'>

            <h1 className='text-primary text-center text-3xl lg:text-5xl font-semibold my-20'>Our Best Selling Products</h1>
            <div className='grid lg:grid-cols-3 gap-24'>

                {
                    productsForHomePage?.map(p => <HomepageProduct key={p._id} eachProduct={p} />)
                }
            </div>
            <div className='flex justify-center mt-14'>
                <Link to="/products" className='btn btn-primary text-white'>Show all Products<FaArrowRight className='ml-2' /></Link>
            </div>
        </section>
    );
};

export default ProductsForHomePage;