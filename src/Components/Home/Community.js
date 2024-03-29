import React from 'react';
import facebook from '../../Assets/Icons/facebook.png';
import twitter from '../../Assets/Icons/twitter.png';
import discord from '../../Assets/Icons/discord.png';
import telegram from '../../Assets/Icons/telegram.png';
import logo from '../../Assets/logo.png';

const Community = () => {
    return (
        <section className='mx-auto max-w-screen-xl px-3 my-32'>

            <div>
                <h1 className='text-primary text-center text-3xl lg:text-5xl font-semibold mt-20 mb-5'>Join Into Our Hub</h1>

                <h2 className="normal-case lg:text-2xl text-xl text-center font-bold lg:mb-20 mb-10" style={{ fontFamily: "Ubuntu" }}><img className='w-9 mb-1 mr-2 App-logo inline-block' src={logo} alt="" />Credible Technologies Communities</h2>

                <div className='grid lg:grid-cols-4 gap-7'>
                    <a href="https://www.facebook.com/taseenfuadjeem" target="_blank" rel='noreferrer' className='flex justify-center items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={facebook} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Facebook</h2>
                            <p className='mt-2 text-sm'>Like our page for product reviews.</p>
                        </div>
                    </a>
                    <a href="https://twitter.com/taseenfuadjeem" target="_blank" rel='noreferrer' className='flex justify-center items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={twitter} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Twitter</h2>
                            <p className='mt-2 text-sm'>Follow for latest news and updates.</p>
                        </div>
                    </a>
                    <a href="https://discord.gg/vCUdY5wwwK" target="_blank" rel='noreferrer' className='flex justify-center items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={discord} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Discord</h2>
                            <p className='mt-2 text-sm'>Join our largest discord server.</p>
                        </div>
                    </a>
                    <a href="https://t.me/SanctumSactorum" target="_blank" rel='noreferrer' className='flex justify-center items-center bg-white shadow-lg p-5 rounded-md'>
                        <img className='w-24' src={telegram} alt="" />
                        <div className='ml-3'>
                            <h2 className='text-xl font-semibold'>Telegram</h2>
                            <p className='mt-2 text-sm'>Join our largest telegram channel.</p>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Community;