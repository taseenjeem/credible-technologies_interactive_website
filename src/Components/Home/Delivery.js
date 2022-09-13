import React from 'react';
import delivery from '../../Assets/delivery.png';
import shipping from "../../Assets/Icons/shipping.png";

const Delivery = () => {
    return (
        <section className='mb-16'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={delivery} className="lg:w-3/6 drop-shadow-xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold lg:leading-relaxed leading-snug capitalize">Enjoy our fastest World Wide Delivery <img className='w-12 inline-block' src={shipping} alt="" /></h1>
                        <p className="py-6 leading-relaxed">From keeping your costs low to anticipating potential roadblocks, we help your business ship smarter. Our local experts identify the most efficient logistics solutions for your needs — and then put these answers into motion using the power of our international carrier networks and resources.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;