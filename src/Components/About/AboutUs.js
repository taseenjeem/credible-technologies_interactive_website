import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import mission from '../../Assets/mission.png';
import vision from '../../Assets/vission.png';
import { Link } from 'react-router-dom';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const AboutUs = () => {
    return (
        <section className='mx-auto max-w-screen-xl px-3 my-28'>

            <PageTitle title="About Us" />

            <div className='bg-white p-7 rounded-lg shadow-lg'>
                <h1 className='lg:text-5xl text-3xl text-center lg:leading-relaxed font-semibold capitalize'>The Game Is Being <br />Changed by Us</h1>
                <p className='text-center lg:w-2/5 mx-auto my-5'>A significant part of people's lives now is the network, as a result of raising people's standards of living.</p>

                <div className='flex justify-center mt-7'>
                    <Link to="/products" className='btn text-white capitalize mx-3'>Get Started</Link>
                    <Link to="/terms-and-conditions" className='btn text-white capitalize mx-3'>Privacy Policy</Link>
                </div>

                <div className='absolute top-[30%] left-[80%] h-[15px] w-[15px] rounded-full bg-[#452473]'></div>
                <div className='absolute top-[40%] left-[20%]  h-[20px] w-[20px] rounded-full bg-[#e3614a]'></div>
                <div className='absolute top-[60%] left-[70%]  h-[20px] w-[20px] rounded-full bg-[#16162E]'></div>
                <div className='absolute top-[70%] right-[20%]  h-[10px] w-[10px] rounded-full bg-[#46c08f]'></div>
            </div>

            <div className='container text-left sm:block lg:flex justify-around items-center mt-[100px] w-10/12 mx-auto '>
                <div className='w-full lg:w-[40%] relative mb-16 lg:mb-0'>
                    <div className='mb-12'>
                        <h4 className='text-[#65C3C8] text-3xl font-bold mb-4'>Our story</h4>
                        <p className='text-[#0B1B28] text-[18px] font-semibold'>We are building the economic infrastructure for the internet. Businneses of every size.</p>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='mt-4'>

                            <div className='relative h-[70px] w-[70px] bg-[#16162E] rounded-full'>
                                <div className='absolute h-[70px] w-[70px] top-[-55%] bg-base-100 '></div>
                                <div className='absolute top-[0%] left-[0%] h-[30px]  overflow-hidden w-[30px] bg-[#452473] rounded-full'></div>
                                <div className='absolute top-[0%] left-[50%] h-[30px] overflow-hidden w-[30px] bg-[#FF745C] rounded-full'></div>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-[#0B1B28] text-[14px] mt-8 pl-4 sm:pr-0 lg:pr-8'>A living place for curiosity and collaboration meeting and meaning. <br />The heart of a creative community.</p>
                        </div>

                    </div>
                    <div className='absolute top-[50%] left-[40%] h-[10px] w-[10px] rounded-full bg-[#452473]'></div>
                    <div className='absolute top-[50%] right-[0%] h-[15px] w-[15px] rounded-full bg-[#FF745C]'></div>
                </div>

                <div className='sm:w-full lg:w-[50%] lg:ml-52 pt-4'>
                    <div>
                        <h4 className='text-[18px] text-[#0B1B28] font-bold mb-2'>01. 6 years of intence research </h4>
                        <p className='text-[14px] text-[#0B1B28] ml-6 mb-5'>Our founders had a solution. This is your Email marketing specilist, newsslatter service, and campaign manager, all rolled into one.</p>
                        <h4 className='text-[18px] text-[#0B1B28] font-bold mb-2'>02. Audience segmentation</h4>
                        <p className='text-[14px] text-[#0B1B28] ml-6 mb-5'>Our founders had a solution. This is your Email marketing specilist, newsslatter service, and campaign manager, all rolled into one.</p>
                        <h4 className='text-[18px] text-[#0B1B28] font-bold mb-2'>03. Contact monitoring</h4>
                        <p className='text-[14px] text-[#0B1B28] ml-6'>Our founders had a solution. This is your Email marketing specilist, newsslatter service, and campaign manager, all rolled into one.</p>
                    </div>
                </div>
            </div>

            <div className="hero my-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={mission} className="rounded-lg lg:w-3/6" alt='' />
                    <div>
                        <h1 className='text-5xl text-neutral capitalize font-bold mb-2 text-left leading-[70px]'>our mission</h1>
                        <p className='text-base text-neutral mb-8 leading-relaxed'>Our mission is to provide quality but affordable electronics for education, entertainment, self-development and self-fulfillment; to all when the need arises by: Providing a wide range of technologies to satisfy our clients. Exceeding our customer's expectation in their requirements.</p>
                        <div className='flex justify-between items-center '>
                            <div className='relative'>
                                <h4 className='text-[18px] text-[#7D52F4] font-bold text-center '>94%</h4>
                                <p className='text-[12px] text-[#0B1B28] uppercase'>customer attention</p>
                            </div>
                            <div>
                                <h4 className='text-[18px] text-[#65C3C8] text-center font-bold'>72k</h4>
                                <p className='text-[12px] text-[#0B1B28] uppercase'>customer attention</p>
                            </div>
                            <div>
                                <h4 className='text-[18px] text-[#7D52F4] text-center font-bold'>10k</h4>
                                <p className='text-[12px] text-[#0B1B28] uppercase'>customer attention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero mt-16 lg:mt-0">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={vision} className="rounded-lg lg:w-[43%]" alt='' />
                    <div>
                        <h2 className='text-5xl text-neutral text-left capitalize font-bold leading-[70px] mb-2'>Our Vision</h2>
                        <p className='text-base text-neutral mb-8 leading-relaxed'>People love their electronics, and Credible Technologies Ltd claims to make the best, even going so far as to imply that they'll have more to offer than just entertainment value. Credible Technologies's vision is to "inspire the world with our innovative technologies, products, and design that enrich people's lives and contribute to social prosperity.</p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto lg:my-[100px] my-10'>
                <h2 className='text-3xl text-[#0B1B28] font-bold mb-4 text-center'>Beliving neglected so so allowance</h2>
                <p className='text-[14px] text-[#0B1B28] text-center mb-4'>We so opinion friends me message delight. Whole front do of <br /> plate heard oh ought. His defective convinced residence own.</p>
                <div className='flex justify-center'>
                    <Link to='/contact-us' className='btn-sm btn capitalize border-none text-white mx-auto rounded-3xl'>give us your thoughts</Link>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto mt-12'>
                    <div className="card w-full bg-white shadow-lg text-primary-content max-h-60">
                        <div className="p-6 text-left">
                            <div className='bg-[#65C3C8] p-3 w-10 rounded mb-4'>
                                <BsTelephoneFill className='text-white text-lg' />
                            </div>
                            <h2 className="text-[#0B1B28] font-bold text-[18px] capitalize mb-3">Ask a potential mistress</h2>
                            <p className='text-[#0B1B28] text-[14px]'>If you have any queries then you can direct contact us through our phone number. We give 24/7 customer support.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-white shadow-lg text-primary-content max-h-60">
                        <div className="p-6 text-left">
                            <div className='bg-[#65C3C8] p-3 w-10 rounded mb-4'>
                                <IoLocationSharp className='text-white text-lg' />
                            </div>
                            <h2 className="text-[#0B1B28] font-bold text-[18px] capitalize mb-3">Over 80 official outlets</h2>
                            <p className='text-[#0B1B28] text-[14px]'>We are available in 86 countries in the world. They can issue warranty any where from our outlets. Because we provide international warranty.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-white shadow-lg text-primary-content max-h-60">
                        <div className="p-6 text-left">
                            <div className='bg-[#65C3C8] p-3 w-10 rounded mb-4'>
                                <MdEmail className='text-white text-lg' />
                            </div>
                            <h2 className="text-[#0B1B28] font-bold text-[18px] mb-3">24/7 Customer Support</h2>
                            <p className='text-[#0B1B28] text-[14px]'>You can email us for contact. Our email is helpdesk@credible.tech to reach us and you can also take career options.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;