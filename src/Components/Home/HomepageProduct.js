import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomepageProduct = ({ eachProduct }) => {

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

    const { _id, name, img, brand, manufacturer, price, qnt, description } = eachProduct;

    return (
        <div className="card shadow-2xl">
            <figure><img src={img} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                <p className='text-sm'>Brand: <strong>{brand}</strong></p>
                <p className='text-sm'>Manufacturer: <strong>{manufacturer}</strong></p>
                <p className='text-sm'>Available Quantity: <strong>{qnt}</strong></p>
                <div className='overflow-y-auto h-40'>
                    <p className='my-3 text-gray-500'>{description}</p>
                </div>
                <div className="card-actions justify-end mt-5">
                    <button onClick={() => navigateToPurchase(_id)} className="btn text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomepageProduct;