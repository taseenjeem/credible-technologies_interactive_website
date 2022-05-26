import React from 'react';
import { Link } from 'react-router-dom';

const OrderedProduct = ({ order }) => {

    const { _id, orderedProduct, orderedQuantity, productImage, productPrice } = order;

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
                <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-success btn-xs">Pay $</button></Link>
            </th>
        </tr>

    );
};

export default OrderedProduct;