import React from 'react';
import facebook from '../../Assets/Icons/facebook.png';
import twitter from '../../Assets/Icons/twitter.png';
import discord from '../../Assets/Icons/discord.png';
import telegram from '../../Assets/Icons/telegram.png';
import logo from '../../Assets/logo.png';

const Community = () => {
    return (
        <section className='lg:px-24 px-3 my-32'>

            <div>
                <h1 className='text-primary text-center text-3xl lg:text-5xl font-semibold mt-20 mb-5'>Join Into Our Hub</h1>

                <h2 className="normal-case lg:text-2xl text-xl text-center font-bold mb-16" style={{ fontFamily: "Ubuntu" }}><img className='w-9 mb-1 mr-2 App-logo inline-block' src={logo} alt="" />Credible Technologies Communities</h2>

                <div className='grid lg:grid-cols-4 gap-7'>
                    <div className='flex justify-center items-center bg-primary bg-opacity-20 p-5 rounded-md'>
                        <img className='w-24' src={facebook} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Facebook</h2>
                            <p className='mt-2 text-sm'>Like our page for product reviews.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-primary bg-opacity-20 p-5 rounded-md'>
                        <img className='w-24' src={twitter} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Twitter</h2>
                            <p className='mt-2 text-sm'>Follow for latest news and updates.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-primary bg-opacity-20 p-5 rounded-md'>
                        <img className='w-24' src={discord} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Discord</h2>
                            <p className='mt-2 text-sm'>Join our largest discord server.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-primary bg-opacity-20 p-5 rounded-md'>
                        <img className='w-24' src={telegram} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Telegram</h2>
                            <p className='mt-2 text-sm'>Join our largest telegram channel.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Community;