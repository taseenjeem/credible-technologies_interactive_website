import React from 'react';

const OrderedProduct = ({ order }) => {

    const { orderedProduct, orderedQuantity, productImage, productPrice } = order;

    const totalPrice = Number(orderedQuantity) * Number(productPrice);

    return (

        <tr>

            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div title={`${orderedProduct}`} class="font-bold">{orderedProduct.length > 25 ? orderedProduct.slice(0, 35) + "..." : orderedProduct}</div>
                    </div>
                </div>
            </td>
            <td>
                {orderedQuantity} PCS
                <br />
                <span class="badge badge-ghost badge-sm">Product price : ${productPrice}</span>
            </td>
            <td>${totalPrice}</td>
            <th>
                <button class="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default OrderedProduct;