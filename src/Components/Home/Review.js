import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const Review = ({ review }) => {

    const { name, img, location, message, rate } = review;

    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-xl border rounded-lg">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-primary" src={img} alt="" />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
                <h2 className="text-gray-800 text-lg font-semibold my-2">{rate} out of 5<BsStarFill className='inline-block -mt-2 ml-2 text-yellow-500' /></h2>
                <div className='overflow-y-auto h-[200px] p-1'>
                    <p className="mt-2 text-gray-600 text-justify">{message}</p>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/" className="text-md text-gray-400 font-medium ">{location}</a>
            </div>
        </div>
    );
};

export default Review;