import React from 'react';
import quote from '../../Assets/Icons/quote.png';

const Reviews = () => {
    return (
        <section className='lg:px-24 px-3'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Reviews</h3>
                    <h1 className='text-4xl font-semibold my-2'>What Our Customer Say</h1>
                </div>
                <img className='lg:w-48 w-24' src={quote} alt="" />
            </div>
            <div>

                <div class="max-w-md py-4 px-8 bg-white shadow-xl border rounded-lg my-20">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-primary" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">John Doe</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="/" class="text-md text-gray-400 font-medium ">USA</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;