import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const OrderedProduct = ({ order }) => {

    const { _id, orderedProduct, orderedQuantity, productImage, productPrice, paid, customerName, customerEmail, customerAddress, transactionId } = order;

    const totalPrice = Number(orderedQuantity) * Number(productPrice);

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
                        <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-success w-full btn-sm">Pay $</button></Link>
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