import React from 'react';
import icon1 from '../../Assets/Icons/icon (1).png';
import icon2 from '../../Assets/Icons/icon (2).png';
import icon3 from '../../Assets/Icons/icon (3).png';
import icon4 from '../../Assets/Icons/icon (4).png';
import business from '../../Assets/business.png';
import CountUp from 'react-countup';
import Swal from 'sweetalert2';

const BusinessSummery = () => {

    const handleSubmit = e => {

        e.preventDefault();
        const email = e.target.mail.value;

        if (email === "") {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please enter your email.',
                showConfirmButton: true,
                timer: false
            })

            e.target.reset();

        } else {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have successfully subscriber to our newsletter services.',
                showConfirmButton: true,
                timer: false
            })

            e.target.reset();

        }

    }

    return (
        <section className='px-3 my-36 bg-cover object-cover ' style={{ backgroundImage: `url(${business})` }}>

            <div className='mx-auto max-w-screen-xl'>
                <h1 className='text-center text-primary text-5xl font-semibold uppercase'>Millions of people trust us</h1>
                <h2 className='text-center text-xl uppercase font-semibold my-4'>Our main priority is you</h2>

                <div className='grid lg:grid-cols-4 grid-cols-2 mt-16 gap-14'>
                    <div className='text-center'>
                        <img className='w-28 mx-auto' src={icon1} alt="" />
                        <h3 className='text-6xl font-bold'><CountUp end={86} duration={4} /></h3>
                        <p className='text-primary text-xl font-bold'>Countries</p>
                    </div>
                    <div className='text-center'>
                        <img className='w-28 mx-auto' src={icon2} alt="" />
                        <h3 className='text-6xl font-bold'><CountUp end={700} duration={5} suffix="+" /></h3>
                        <p className='text-primary text-xl font-bold'>Feedbacks</p>
                    </div>
                    <div className='text-center'>
                        <img className='w-28 mx-auto' src={icon3} alt="" />
                        <h3 className='text-6xl font-bold'><CountUp end={900} duration={6} suffix="+" /></h3>
                        <p className='text-primary text-xl font-bold'>Happy Customers</p>
                    </div>
                    <div className='text-center'>
                        <img className='w-28 mx-auto' src={icon4} alt="" />
                        <h3 className='text-6xl font-bold'><CountUp end={500} duration={7} suffix="+" /></h3>
                        <p className='text-primary text-xl font-bold'>Projects</p>
                    </div>
                </div>

                <div className='shadow-2xl bg-white lg:p-14 p-8 rounded-2xl lg:flex lg:justify-evenly lg:items-center mx-auto lg:w-9/12 my-14'>
                    <div className='lg:w-3/6'>
                        <h1 className='text-2xl font-bold text-primary'>Have any suggestion for us or want to know our improvements?</h1>
                        <h2 className='text-xl my-5'>to get updated, subscribe us</h2>
                    </div>
                    <form onSubmit={handleSubmit} className='lg:w-3/6 lg:flex lg:justify-center'>
                        <div>
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="email" name='mail' placeholder="your email" className="input input-bordered w-full" />
                                    <input type="submit" className='btn text-white' value="subscribe" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default BusinessSummery;