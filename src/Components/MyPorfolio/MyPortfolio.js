import React from 'react';
import photo from '../../Assets/photo.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import html from '../../Assets/Icons/icons8-html-5-240.png';
import css from '../../Assets/Icons/icons8-css3-240.png';
import js from '../../Assets/Icons/icons8-javascript-240.png';
import bootstrap from '../../Assets/Icons/icons8-bootstrap-240.png';
import tailwind from '../../Assets/Icons/tailwind-css.png';
import react from '../../Assets/Icons/icons8-react-native-240.png';
import node from '../../Assets/Icons/icons8-node-js-144.png';
import mongo from '../../Assets/Icons/icons8-mongodb-240.png';
import express from '../../Assets/Icons/Expressjs.png';
import project1 from '../../Assets/project (1).png';
import project2 from '../../Assets/project (2).png';
import project3 from '../../Assets/project (3).png';

const MyPortfolio = () => {
    return (



        <main className="profile-page">
            <section className="relative block h-500-px">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2018/11/29/14/01/mountains-3845777_960_720.jpg)" }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4 lg:px-28">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-3xl -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img alt="..." src={photo} className="shadow-2xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                    </div>
                                </div>

                            </div>
                            <div className="text-center mt-28">
                                <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                                    Md. Ta-Seen Fuad Jeem
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <FaMapMarkerAlt className='text-blueGray-400 -mt-1 mr-2 text-xl inline-block' />
                                    Dhaka, Bangladesh
                                </div>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    <MdEmail className='text-blueGray-400 -mt-1 mr-2 text-xl inline-block' />
                                    mdtaseenfuad@gmail.com
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    Junior Web-Developer
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    BSC in Computer Science Engineering, Tejgaon Collage, Dhaka
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">

                                        <h1 className='text-3xl font-semibold underline underline-offset-8'>Skills Or Technologies</h1>

                                        <div className='grid grid-cols-2 gap-7 mt-10'>

                                            <div className='flex justify-center items-center'>
                                                <img src={html} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>HTML 5</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={css} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>CSS 3</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={bootstrap} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>Bootstrap</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={tailwind} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>Tailwind CSS</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={js} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>JavaScript</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={react} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>React JS</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={mongo} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>MongoDB</h2>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <img src={node} className="w-20" alt="" />
                                                <h2 className='text-xl font-semibold'>Node JS</h2>
                                            </div>

                                        </div>

                                        <div className='mt-7'>
                                            <img src={express} className="w-40 mx-auto" alt="" />
                                            <h2 className='text-xl font-semibold'>Express JS</h2>
                                        </div>

                                        <div className='mt-20'>

                                            <h1 className='text-3xl font-semibold'>My own recent project</h1>

                                            <div className="grid lg:grid-cols-3 gap-6 mt-16">

                                                <div className="card bg-white shadow-2xl">
                                                    <figure><img src={project1} alt="Project" /></figure>
                                                    <div className="card-body">
                                                        <h2 className="text-center text-xl font-bold">Steve's Lenses</h2>
                                                        <p className='my-3'>An independent service provider</p>
                                                        <div className="card-actions justify-end">
                                                            <a href="https://photographer-portfolio-8cbb0.web.app/"><button className="btn btn-primary">Visit</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card bg-white shadow-2xl">
                                                    <figure><img src={project2} alt="Project" /></figure>
                                                    <div className="card-body">
                                                        <h2 className="text-center text-xl font-bold">SONY Bangladesh</h2>
                                                        <p className='my-3'>UI, React route based website</p>
                                                        <div className="card-actions justify-end">
                                                            <a href="https://sony-bangladesh.netlify.app/"><button className="btn btn-primary">Visit</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card bg-white shadow-2xl">
                                                    <figure><img src={project3} alt="Project" /></figure>
                                                    <div className="card-body">
                                                        <h2 className="text-center text-xl font-bold">RealPix</h2>
                                                        <p className='my-3'>A camera management warehouse website</p>
                                                        <div className="card-actions justify-end">
                                                            <a href="https://camera-warehouse-9d161.web.app/"><button className="btn btn-primary">Visit</button></a>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default MyPortfolio;