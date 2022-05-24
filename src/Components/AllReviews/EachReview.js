import React from 'react';
import profile from "../../Assets/Icons/profile-user.png";

const EachReview = ({ review }) => {

    const { name, img, location, message } = review;

    return (
        <div class="max-w-md py-4 px-8 bg-white shadow-xl border rounded-lg mt-14">
            <div class="flex justify-center md:justify-end -mt-16">
                <img class="w-20 h-20 object-cover rounded-full border-2 border-primary" src={img ? img : profile} alt="" />
            </div>
            <div>
                <h2 class="text-gray-800 text-3xl font-semibold">{name}</h2>
                <p class="mt-2 text-gray-600">{message}</p>
            </div>
            <div class="flex justify-end mt-4">
                <a href="/" class="text-md text-gray-400 font-medium ">{location}</a>
            </div>
        </div>
    );
};

export default EachReview;