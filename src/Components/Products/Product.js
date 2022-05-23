import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ eachProduct }) => {


    const { _id, name, img, brand, manufacturer, price, qnt, description, minimumQnt } = eachProduct;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

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
                    <p className='text-sm'>Minimum Order Quantity: <strong>{minimumQnt}</strong></p>
                    <p className='my-3 text-gray-500'>{description.length > 250 ? description.slice(0, 250) + "..." : description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateToPurchase(_id)} class="btn">Order now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;