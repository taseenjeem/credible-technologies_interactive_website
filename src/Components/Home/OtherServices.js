import React from 'react';
import icon1 from '../../Assets/Icons/1.png';
import icon2 from '../../Assets/Icons/2.png';
import icon3 from '../../Assets/Icons/3.png';
import icon4 from '../../Assets/Icons/4.png';
import icon5 from '../../Assets/Icons/5.png';
import icon6 from '../../Assets/Icons/6.png';
import icon7 from '../../Assets/Icons/7-1.png';
import icon8 from '../../Assets/Icons/8-1.png';

const OtherServices = () => {
    return (
        <section className='mx-auto max-w-screen-xl px-3 my-32'>

            <div>

                <h1 className='text-primary text-center text-3xl lg:text-5xl font-semibold mt-20 mb-5'>Our Awesome Features</h1>
                <p className='text-center lg:mb-20 mb-10'>More than 15,000 companies trust and choose Credible Technologies</p>

                <div className='grid lg:grid-cols-4 lg:gap-12 gap-7'>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon1} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Store Hours and Vacation</h2>
                        <p className='text-center text-gray-500'>Ideal for businesses that are seasonal or operate between fixed hours.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon2} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Coupon Management</h2>
                        <p className='text-center text-gray-500'>Set up irresistible deals and offers with flexible discount promo codes.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon3} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Product Import and Export</h2>
                        <p className='text-center text-gray-500'>Import products from and export products to CSV from vendor dashboard.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon4} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Inquiry and Support Ticket System</h2>
                        <p className='text-center text-gray-500'>Interaction with sellers help buyers to make better purchase decisions.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon5} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Membership Subscription</h2>
                        <p className='text-center text-gray-500'>Offer membership plans for sellers, free and paid. Accept recurring fees.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon6} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Invoice and Shipping Labels</h2>
                        <p className='text-center text-gray-500'>Order fulfillment made easy with store invoices and shipping labels.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon7} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>GEO Location and Radius Search</h2>
                        <p className='text-center text-gray-500'>Allow searching products or services near the user’s current location.</p>
                    </div>
                    <div className='bg-white shadow-lg p-7 rounded-lg'>
                        <img src={icon8} className="mx-auto" alt="" />
                        <h2 className='text-center text-lg font-semibold my-4'>Shipment and Delivery</h2>
                        <p className='text-center text-gray-500'>Share tracking of deliveries, notify when shipping status changes.</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default OtherServices;