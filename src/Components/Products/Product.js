import React from 'react';

const Product = ({ eachProduct }) => {

    const { name, img, brand, manufacturer, price, qnt, description } = eachProduct;

    return (
        <div>
            <div class="card lg:card-side bg-white shadow-2xl">
                <figure><img src={img} alt="Album" className='p-6 lg:w-72' /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold">{name}</h2>
                    <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                    <p className='text-sm'>Brand: <strong>{brand}</strong></p>
                    <p className='text-sm'>Manufacturer: <strong>{manufacturer}</strong></p>
                    <p className='text-sm'>Available Quantity: <strong>{qnt}</strong></p>
                    <p className='my-3 text-gray-500'>{description.length > 250 ? description.slice(0, 250) + "..." : description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn">ORDER NOW</button>
                    </div>
                </div>
            </div>
            {/* <div class="card lg:w-96 shadow-2xl bg-white">
                <figure><img src={img} alt="" className='p-6 lg:w-72' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description.length > 250 ? description.slice(0, 250) + "..." : description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Product;