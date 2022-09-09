import React from 'react';
import banner from '../../Assets/banner.jpg';
import "../../App.css";
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='text-white'>
                    <h1 className='text-2xl font-bold underline underline-offset-4'>Welcome to</h1>
                    <h1 className="my-5 text-5xl lg:text-7xl font-bold" style={{ fontFamily: "Ubuntu" }}><img className='App-logo lg:w-32 w-16 inline-block mt-[-10px]' src={logo} alt="" /> Credible Technologies</h1>
                    <div className='lg:w-3/4 mx-auto mb-5 lg:leading-loose'>
                        <p>If you are looking for the best computer components manufacturer in the world you must consider Credible Technologies, as it is a leading computer parts and manufacturer company in the world. Selling computer Accessories and IT products all over the world through its website and worldwide shipping platform. It ensures a fastest , secure, and convenient online business experience with a wide range of product offering in many categories.</p>
                    </div>
                    <Link to="/about-us" className="btn btn-primary capitalize">Learn more about us</Link>
                </div>
            </div>
        </section>
    );
};

export default Header;