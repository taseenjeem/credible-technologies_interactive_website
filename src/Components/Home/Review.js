import React from 'react';

const Review = ({ review }) => {

    const { name, img, location, message } = review;

    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-xl border rounded-lg">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-primary" src={img} alt="" />
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
                <p className="mt-2 text-gray-600">{message}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/" className="text-md text-gray-400 font-medium ">{location}</a>
            </div>
        </div>
    );
};

export default Review;