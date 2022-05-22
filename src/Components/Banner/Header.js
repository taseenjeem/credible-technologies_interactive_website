import React from 'react';
import banner from '../../Assets/banner.jpg';
import logo from '../../Assets/logo.png';
import { BiWorld } from 'react-icons/bi';
import { Slide } from 'react-reveal';

const Header = () => {
    return (
        <section className="hero h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className='max-w-5xl'>
                    <Slide left >
                        <h1 className='text-2xl font-bold underline underline-offset-4'>Welcome to</h1>
                        <h1 className="my-5 text-6xl lg:text-7xl font-bold"><img className='w-16 inline-block mt-[-10px]' src={logo} alt="" /> Credible Technologies</h1>
                    </Slide>

                    <Slide right >
                        <p className="mb-5">If you are looking for the best computer components shop in the world you must consider Credible Technologies, as it is a leading computer shop and manufacturer platform in the world. Selling computer Accessories and IT products all over the world through its website and worldwide shipping platform. It ensures a fastest , secure, and convenient online shopping experience with a wide range of product offering in categories.</p>
                        <button className="btn btn-primary">Explore more <BiWorld className='text-xl ml-1' /></button>
                    </Slide>

                </div>
            </div>
        </section>
    );
};

export default Header;