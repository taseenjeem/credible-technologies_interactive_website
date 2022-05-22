import React from 'react';
import { Fade, Slide, Zoom } from 'react-reveal';
import icon1 from '../../Assets/Icons/icon (1).png';
import icon2 from '../../Assets/Icons/icon (2).png';
import icon3 from '../../Assets/Icons/icon (3).png';
import icon4 from '../../Assets/Icons/icon (4).png';
import business from '../../Assets/business.png';

const BusinessSummery = () => {
    return (
        <section className='lg:px-24 px-3 my-36 bg-cover object-cover ' style={{ backgroundImage: `url(${business})` }}>

            <Fade bottom>
                <h1 className='text-center text-primary text-5xl font-semibold uppercase'>Millions of people trust us</h1>
                <h2 className='text-center text-xl uppercase font-semibold my-4'>Our main priority is you</h2>
            </Fade>

            <div className='grid lg:grid-cols-4 grid-cols-2 mt-16 gap-14'>
                <Slide left>
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
                </Slide>
                <Slide right>
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
                </Slide>
            </div>

            <Zoom>
                <div className='shadow-2xl bg-white lg:p-14 p-8 rounded-2xl lg:flex lg:justify-evenly lg:items-center mx-auto lg:w-9/12 my-14'>
                    <div className='lg:w-3/6'>
                        <h1 className='text-2xl font-bold text-primary'>Have any suggestion for us or want to know our improvements?</h1>
                        <h2 className='text-xl my-5'>Don't hesitate to contact us</h2>
                    </div>
                    <div className='lg:w-3/6 lg:flex lg:justify-center'>
                        <div>
                            <div class="form-control">
                                <div class="input-group">
                                    <input type="email" placeholder="your email" class="input input-bordered w-full" />
                                    <button class="btn">
                                        subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>

        </section>
    );
};

export default BusinessSummery;