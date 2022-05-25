import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import HomepageProduct from './HomepageProduct';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Zoom } from 'react-reveal';

const ProductsForHomePage = () => {

    const { data: products, isLoading } = useQuery("homePageProducts", () => fetch("https://credible-technologies.herokuapp.com/all-products").then(res => res.json()));

    const productsForHomePage = products?.slice(5, 11);

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='lg:px-24 px-3 my-32'>
            <Zoom>
                <h1 className='text-primary text-center text-3xl lg:text-6xl font-semibold my-14'>Our Best Selling Products</h1>
            </Zoom>
            <Fade top>
                <div className='grid lg:grid-cols-3 gap-7'>

                    {
                        productsForHomePage?.map(p => <HomepageProduct key={p._id} eachProduct={p} />)
                    }
                </div>
            </Fade>

            <div className='flex justify-center mt-14'>
                <Link to="/products" className='btn btn-primary text-white'>Show all Products<FaArrowRight className='ml-2' /></Link>
            </div>
        </section>
    );
};

export default ProductsForHomePage;