import React from 'react';
import icon1 from '../../Assets/Icons/icon (1).png';
import icon2 from '../../Assets/Icons/icon (2).png';
import icon3 from '../../Assets/Icons/icon (3).png';
import icon4 from '../../Assets/Icons/icon (4).png';

const BusinessSummery = () => {
    return (
        <section className='lg:px-24 px-3 my-36'>

            <h1 className='text-center text-primary text-5xl font-semibold uppercase'>Millions of people trust us</h1>
            <h2 className='text-center text-xl uppercase font-semibold my-4'>Our main priority is you</h2>

            <div className='grid lg:grid-cols-4 grid-cols-2 my-24'>
                <div className='text-center'>
                    <img className='w-28 mx-auto' src={icon1} alt="" />
                    <h3 className='text-6xl font-bold'>86</h3>
                    <p className='text-primary text-xl font-bold'>Countries</p>
                </div>
                <div className='text-center'>
                    <img className='w-28 mx-auto' src={icon2} alt="" />
                    <h3 className='text-6xl font-bold'>700+</h3>
                    <p className='text-primary text-xl font-bold'>Feedbacks</p>
                </div>
                <div className='text-center'>
                    <img className='w-28 mx-auto' src={icon3} alt="" />
                    <h3 className='text-6xl font-bold'>900+</h3>
                    <p className='text-primary text-xl font-bold'>Happy Customers</p>
                </div>
                <div className='text-center'>
                    <img className='w-28 mx-auto' src={icon4} alt="" />
                    <h3 className='text-6xl font-bold'>500+</h3>
                    <p className='text-primary text-xl font-bold'>Projects</p>
                </div>
            </div>

        </section>
    );
};

export default BusinessSummery;