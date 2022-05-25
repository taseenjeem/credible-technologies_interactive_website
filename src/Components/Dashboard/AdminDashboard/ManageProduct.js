import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProduct = ({ product, refetch }) => {

    const { _id, name, img, brand, manufacturer, price, qnt, description, minimumQnt } = product;

    const handleDelete = () => {
        const url = `http://localhost:5000/delete-product/${_id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Data deleted successfully");
                refetch();
            })
    }

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
                    <div className="card-actions justify-between">
                        <label htmlFor="delete-modal" className="btn modal-button">Delete</label>
                        <Link to={`/dashboard/update-a-product/${_id}`}><button className="btn">Update Info</button></Link>
                        <Link to={`/dashboard/update-product-quantity/${_id}`}><button className="btn">Update Quantity</button></Link>
                    </div>
                </div>

                <input type="checkbox" id="delete-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Are you sure for delete the product?</h3>
                        <div className="modal-action">
                            <button onClick={() => handleDelete()} htmlFor="delete-modal" className="btn">Yes, Delete !!</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageProduct;