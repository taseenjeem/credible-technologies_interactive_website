import React from 'react';

const ManageProduct = ({ product }) => {

    const { name, img, brand, manufacturer, price, qnt, description, minimumQnt } = product;

    return (
        <div>
            <div className="card bg-white shadow-xl">
                <figure><img src={img} className="w-40" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                    <p className='text-sm'>Brand: <strong>{brand}</strong></p>
                    <p className='text-sm'>Manufacturer: <strong>{manufacturer}</strong></p>
                    <p className='text-sm'>Available Quantity: <strong>{qnt}</strong></p>
                    <p className='text-sm'>Minimum Order Quantity: <strong>{minimumQnt}</strong></p>
                    <p className='my-3 text-gray-500'>{description?.length > 250 ? description.slice(0, 250) + "..." : description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Delete</button>
                        <button className="btn">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;