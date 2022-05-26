import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const OrderedProduct = ({ order, orders, setOrders }) => {

    const { _id, orderedProduct, orderedQuantity, productImage, productPrice, paid, transactionId } = order;

    const totalPrice = Number(orderedQuantity) * Number(productPrice);

    const handleDelete = () => {
        const url = `http://localhost:5000/delete-order/${_id}`;


        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Order deleted successfully");
                const remaining = orders.filter(p => p._id !== _id);
                setOrders(remaining);
            })
    }

    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div title={`${orderedProduct}`} className="font-bold">{orderedProduct.length > 25 ? orderedProduct.slice(0, 35) + "..." : orderedProduct}</div>
                    </div>
                </div>
            </td>
            <td>
                {orderedQuantity} PCS
                <br />
                <span className="badge badge-ghost badge-sm">Product price : ${productPrice}</span>
            </td>
            <td>${totalPrice}</td>
            <th>
                {
                    !paid ?
                        <>
                            <div className='flex justify-evenly'>
                                <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-success btn-sm">Pay $</button></Link>
                                <label for="delete-order" className="btn btn-error btn-sm">Delete</label>
                            </div>





                            <input type="checkbox" id="delete-order" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <label for="delete-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="font-bold text-lg">Are you sure for delete?</h3>
                                    <div class="modal-action">
                                        <label onClick={() => handleDelete()} for="delete-order" class="btn">yes! delete</label>
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        <>
                            <div className='flex flex-col'>
                                <p className='mx-auto text-green-600 mb-2'>PAID<BsFillCheckCircleFill className='text-green-600 inline-block -mt-1 text-lg ml-2' /></p>
                                <p className='text-xs'>Transaction ID : <span className='text-green-600'>{transactionId}</span></p>
                            </div>
                        </>
                }

            </th>
        </tr>

    );
};

export default OrderedProduct;