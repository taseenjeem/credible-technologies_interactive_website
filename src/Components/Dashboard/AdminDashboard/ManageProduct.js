import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProduct = ({ product, refetch }) => {

    const { _id, name, img, brand, manufacturer, price, qnt, description, minimumQnt } = product;

    const handleDelete = id => {
        const url = `http://localhost:5000/delete-product/${id}`;

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
                    <div className="card-actions justify-end">
                        <label for="delete-modal" class="btn modal-button">Delete</label>
                        <Link to={`/dashboard/update-a-product/${_id}`}><button className="btn">Update</button></Link>
                    </div>
                </div>

                <input type="checkbox" id="delete-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Are you sure for delete the product?</h3>
                        <div class="modal-action">
                            <label onClick={() => handleDelete(_id)} for="delete-modal" class="btn">Yes, Delete !!</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageProduct;