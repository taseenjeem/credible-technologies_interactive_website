import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import mission from '../../Assets/mission.png';
import vision from '../../Assets/vission.png';

const AboutUs = () => {
    return (
        <section className='lg:px-24 px-3 my-28'>

            <PageTitle title="About Us" />

            <div className='bg-white p-7 rounded-lg shadow-lg'>
                <h1 className='lg:text-5xl text-3xl text-center lg:leading-relaxed font-semibold capitalize'>The Game Is Being <br />Changed by Us</h1>
                <p className='text-center lg:w-2/5 mx-auto my-5'>A significant part of people's lives now is the network, as a result of raising people's standards of living.</p>

                <div className='flex justify-center mt-7'>
                    <button className='btn text-white capitalize mx-3'>Get Started</button>
                    <button className='btn text-white capitalize mx-3'>Privacy Policy</button>
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

            <div class="hero min-h-screen mt-16 lg:mt-0">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={mission} class="rounded-lg lg:w-3/6" alt='' />
                    <div>
                        <h1 className='text-5xl text-neutral capitalize font-bold mb-2 text-left leading-[70px]'>our mission</h1>
                        <p className='text-base text-neutral text-left mb-8 leading-relaxed'>Our mission is to provide quality but affordable electronics for education, entertainment, self-development and self-fulfillment; to all when the need arises by: Providing a wide range of technologies to satisfy our clients. Exceeding our customer's expectation in their requirements.</p>
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

            <div class="hero min-h-screen mt-16 lg:mt-0">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={vision} class="rounded-lg lg:w-[43%]" alt='' />
                    <div>
                        <h2 className='text-5xl text-neutral text-left capitalize font-bold leading-[70px] mb-2'>Our Vision</h2>
                        <p className='text-base text-neutral text-left mb-8 leading-relaxed'>People love their electronics, and Credible Technologies Ltd claims to make the best, even going so far as to imply that they'll have more to offer than just entertainment value. Credible Technologies's vision is to "inspire the world with our innovative technologies, products, and design that enrich people's lives and contribute to social prosperity.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;