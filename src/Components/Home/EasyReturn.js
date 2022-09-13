import React from 'react';
import { Link } from 'react-router-dom';
import easyReturn from '../../Assets/return.png';

const EasyReturn = () => {
    return (
        <section className="hero mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={easyReturn} className="rounded-lg drop-shadow-2xl lg:w-3/6" alt='' />
                <div>
                    <h1 className="text-5xl font-bold leading-snug">Easy Return From Home<br />and Warranty</h1>
                    <p className="py-6">We are available in 86 countries in the world. They can issue warranty any where from our outlets. Because we provide international warranty. Customer can easy return our products home with one single tap. Our delivery guy will come to your door step to receive the product. For more information please check our privacy policies.</p>
                    <Link to="/terms-and-conditions" className='btn text-white'>view return Policy</Link>
                </div>
            </div>
        </section>
    );
};

export default EasyReturn;