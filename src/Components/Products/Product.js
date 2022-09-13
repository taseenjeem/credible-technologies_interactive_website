import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ eachProduct }) => {


    const { _id, name, img, brand, manufacturer, price, qnt, description, minimumQnt } = eachProduct;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className="card shadow-2xl">
            <figure><img src={img} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold leading-relaxed">{name}</h2>
                <div className='my-3'>
                    <h3 className='text-xl font-semibold'>Price : $ {price}</h3>
                    <p className='text-sm my-1'>Brand: <strong>{brand}</strong></p>
                    <p className='text-sm'>Manufacturer: <strong>{manufacturer}</strong></p>
                    <p className='text-sm my-1'>Available Quantity: <strong>{qnt}</strong></p>
                    <p className='text-sm'>Minium Order Quantity: <strong>{minimumQnt}</strong></p>
                </div>
                <div className='overflow-y-auto h-40 p-1'>
                    <p className='text-gray-500 leading-relaxed'>{description}</p>
                </div>
            </div>
            <div className="card-actions justify-end px-8 pb-3">
                <button onClick={() => navigateToPurchase(_id)} className="btn w-full text-white">Order Now</button>
            </div>
        </div>
    );
};

export default Product;