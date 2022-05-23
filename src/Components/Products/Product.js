import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';

const Product = ({ eachProduct }) => {

    const [user] = useAuthState(auth);

    const { name, img, brand, manufacturer, price, qnt, description, minimumQnt } = eachProduct;

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const quantity = e.target.qnt.value;

        if (quantity < minimumQnt) {

            toast.warning(`Minimum ${minimumQnt} quantity required !!`)

        } else if (quantity > qnt) {

            toast.warning(`We have only ${qnt} items left. Your ordered quantity is beyond our available stock.`);

        }

    }

    return (
        <div>
            <div class="card lg:card-side bg-white shadow-2xl">
                <figure><img src={img} alt="Album" className='p-6 lg:w-72' /></figure>
                <div class="card-body">
                    <h2 class="card-title font-bold">{name}</h2>
                    <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                    <p className='text-sm'>Brand: <strong>{brand}</strong></p>
                    <p className='text-sm'>Manufacturer: <strong>{manufacturer}</strong></p>
                    <p className='text-sm'>Available Quantity: <strong>{qnt}</strong></p>
                    <p className='text-sm'>Minimum Order Quantity: <strong>{minimumQnt}</strong></p>
                    <p className='my-3 text-gray-500'>{description.length > 250 ? description.slice(0, 250) + "..." : description}</p>
                    <div class="card-actions justify-end">
                        <label for="modal-order" class="btn modal-button">Order now</label>
                    </div>
                </div>
            </div>

            {/* <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="modal-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="modal-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center my-4">Please confirm your order</h3>

                    <form onSubmit={handleSubmit}>
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

                    <div class="modal-action">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;