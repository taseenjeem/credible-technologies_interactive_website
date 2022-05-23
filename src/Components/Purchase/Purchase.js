import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const Purchase = () => {

    const [user] = useAuthState(auth);

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const { _id, name, img, brand, manufacturer, price, qnt, description, minimumQnt } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const productName = e.target.productName.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const quantity = e.target.qnt.value;

        if (quantity < minimumQnt) {

            toast.warning(`Minimum ${minimumQnt} quantity required !!`)

        } else if (quantity > qnt) {

            toast.warning(`We have only ${qnt} items left. Your ordered quantity is beyond our available stock.`);

        } else {
            console.log(name);
        }

    }

    return (
        <section className='lg:px-28 px-3'>
            <div className='grid lg:grid-cols-2 my-28'>
                <div className='lg:flex lg:items-center'>
                    <img className='rounded-3xl shadow-2xl' src={img} alt="" />
                </div>
                <div className='shadow-2xl rounded-3xl p-7 bg-white'>
                    <h3 class="font-bold text-lg text-center mb-4">Please confirm your order</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Product</span>
                            </label>
                            <input type="text" name='productName' disabled value={name} placeholder="your name" class="input input-bordered w-full " />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name='name' disabled value={user?.displayName} placeholder="your name" class="input input-bordered w-full " />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">email</span>
                            </label>
                            <input type="email" name='email' disabled value={user?.email} placeholder="your email" class="input input-bordered w-full" />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input required type="text" name='phone' placeholder="your phone number" class="input input-bordered w-full" />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Delivery address</span>
                            </label>
                            <input required type="text" name='address' placeholder="address" class="input input-bordered w-full" />
                        </div>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input required type="number" name='qnt' placeholder="Item quantity" class="input input-bordered w-full" />
                        </div>
                        <input for="modal-order" type="submit" className='btn w-full mt-4' value="CONFIRM ORDER" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Purchase;