import React from 'react';

const OrderRow = ({ order }) => {

    const { customerAddress, customerEmail, customerName, customerPhone, orderedProduct, orderedQuantity, productImage, productPrice } = order;

    const totalPrice = Number(orderedQuantity) * Number(productPrice);

    return (
        <div>
            <div class="card bg-white shadow-xl">
                <figure><img src={productImage} className="w-40" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title mb-4 font-bold">{orderedProduct}</h2>
                    <p><strong>Ordered by :</strong> {customerName}</p>
                    <p><strong>email :</strong> {customerEmail}</p>
                    <p><strong>Phone :</strong> {customerPhone}</p>
                    <p><strong>Address :</strong> {customerAddress}</p>
                    <p><strong>Quantity :</strong> {orderedQuantity} PCS</p>
                    <p><strong>Price Per Unit :</strong> {productPrice} PCS</p>
                    <p><strong>Total Price :</strong> ${totalPrice}</p>
                    <div class="card-actions justify-end mt-4">
                        <button class="btn btn-error text-white">Delete</button>
                        <button class="btn btn-primary text-white">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderRow;