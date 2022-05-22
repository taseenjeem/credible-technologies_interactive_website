import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../Assets/404.png';
import { FaArrowLeft } from 'react-icons/fa';

const InvalidPage = () => {
    return (
        <section>
            <div className='h-screen'>
                <img className='lg:w-2/5 mx-auto mt-16' src={errorImg} alt="" />
                <Link to="/" className='flex justify-center'>
                    <button className='btn'><FaArrowLeft className='mr-2' />Go back to Home</button>
                </Link>
            </div>
        </section>
    );
};

export default InvalidPage;