import React from 'react';
import server from '../../Assets/Icons/server (1)-min.png';
import team from '../../Assets/Icons/developers-min.png';
import tech from '../../Assets/Icons/virtual-min.png';

const Work = () => {
    return (
        <section className='mx-auto max-w-screen-xl px-3 my-32'>

            <div>

                <h1 className='text-primary text-center text-3xl lg:text-5xl font-semibold mt-20 mb-5 capitalize lg:leading-relaxed leading-relaxed'>We deal with the aspects of<br /> professional IT Services</h1>
                <p className='text-center lg:mb-20 mb-10'>Providing quality services more than 21 years.</p>

                <div className='grid lg:grid-cols-3 gap-7'>
                    <div className='flex justify-between text-justify items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={server} alt="" />
                        <div className='ml-5'>
                            <h2 className='text-xl font-semibold'>Secure Database</h2>
                            <p className='mt-2 text-sm leading-relaxed'>We always want feel secure to the honorable customers. We have a very strong and high secure database management system. No one can leak our customers privet details</p>
                        </div>
                    </div>
                    <div className='flex justify-between text-justify items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={team} alt="" />
                        <div className='ml-5'>
                            <h2 className='text-xl font-semibold'>Intelligent Teamwork</h2>
                            <p className='mt-2 text-sm leading-relaxed'>Our product is world wide famous and people trust us. The reason behind this wonderful achievement is our great team members. They work really hard to gain your trusts.</p>
                        </div>
                    </div>
                    <div className='flex justify-between text-justify items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={tech} alt="" />
                        <div className='ml-5'>
                            <h2 className='text-xl font-semibold'>Virtuality</h2>
                            <p className='mt-2 text-sm leading-relaxed'>We are a technology based company who provides tech to the customers. We worked hard so that, you don't have to. Costumers can buys thing with only a single tap.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Work;