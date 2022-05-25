import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const Purchase = () => {

    const [user] = useAuthState(auth);

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const { name, img, qnt, price, minimumQnt, brand } = product;

    useEffect(() => {
        fetch(`https://credible-technologies.herokuapp.com/purchase/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const productName = e.target.productName.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const quantity = e.target.qnt.value;

        if (quantity < minimumQnt) {

            toast.warning(`Minimum ${minimumQnt} quantity required !!`)

        } else if (quantity > qnt) {

            toast.warning(`We have only ${qnt} items left. Your ordered quantity is beyond our available stock.`);

        } else {

            const bookings = {

                customerName: name,
                orderedProduct: productName,
                productImage: img,
                customerEmail: user?.email,
                customerPhone: phone,
                customerAddress: address,
                orderedQuantity: quantity,
                productPrice: price

            }

            fetch("https://credible-technologies.herokuapp.com/order-bookings", {

                method: 'POST',

                headers: {
                    'content-type': 'application/json'
                },

                body: JSON.stringify(bookings)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Booking successful. We'll contact you soon!");
                        e.target.reset();
                    }
                })

        }

    }

    return (
        <section className='lg:px-28 px-3'>
            <div className='grid lg:grid-cols-2 my-28'>
                <div className='lg:flex lg:items-center'>

                    <div className="card bg-white shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <h3 className='text-lg'>Brand : <span className='text-3xl font-semibold'>{brand}</span></h3>
                            <h3 className='text-lg'>Price per unit : <span className='text-3xl font-semibold'>${price}</span></h3>
                            <h3 className='text-lg'>Minimum ordered quantity : <span className='text-3xl font-semibold'>{minimumQnt}</span> psc</h3>
                        </div>
                        <figure><img src={img} className="w-60" alt="Shoes" /></figure>
                    </div>

                </div>
                <div className='shadow-2xl rounded-3xl p-7 bg-white'>
                    <h3 className="font-bold text-lg text-center mb-4">Please confirm your order</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input type="text" name='productName' disabled value={name} placeholder="your name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' disabled value={user?.displayName} placeholder="your name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" name='email' disabled value={user?.email} placeholder="your email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input required type="text" name='phone' placeholder="your phone number" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Delivery address</span>
                            </label>
                            <input required type="text" name='address' placeholder="address" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input required type="number" name='qnt' placeholder="Item quantity" className="input input-bordered w-full" />
                        </div>
                        <input for="modal-order" type="submit" className='btn w-full mt-4' value="CONFIRM ORDER" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Purchase;