import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';
import Modal from 'react-modal';
import PageTitle from '../PageTitle/PageTitle';
import Swal from 'sweetalert2';

const Purchase = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: "0",
            padding: '0'
        },
    };

    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [user] = useAuthState(auth);

    const { id } = useParams();

    const { data: product, isLoading } = useQuery("productCheckout", () => fetch(`https://credible-technologies.herokuapp.com/purchase/${id}`).then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const productName = e.target.productName.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const quantity = Number(e.target.qnt.value);

        if (quantity < Number(product?.minimumQnt)) {

            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `Minimum ${product?.minimumQnt} quantity required !!`,
                showConfirmButton: false,
                timer: 2000
            })
            e.target.reset();

        } else if (quantity > Number(product?.qnt)) {

            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `We have only ${product?.qnt} items left. Your ordered quantity is beyond our available stock.`,
                showConfirmButton: false,
                timer: 2000
            })
            e.target.reset();

        } else {

            const bookings = {

                customerName: name,
                orderedProduct: productName,
                productImage: product?.img,
                customerEmail: user?.email,
                customerPhone: phone,
                customerAddress: address,
                orderedQuantity: quantity,
                productPrice: product?.price

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
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Booking successful. You can checkout your order in dashboard',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        e.target.reset();
                        closeModal();
                    }
                })

        }

    }

    return (
        <>
            <PageTitle title="Purchase" />
            <div className="md:flex h-screen lg:my-16 lg:mb-16 mb-96 justify-center items-center z-50 py-12 2xl:px-20 md:px-6 px-4">
                <div className="xl:w-2/6 lg:w-2/5 w-full">
                    <img className="w-full rounded-3xl shadow-2xl lg:mb-0 mb-16" alt="" src={product?.img} />

                </div>

                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-gray-600">Credible Technologies Ltd.</p>
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
                            {product?.name}
                        </h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Available Quantity</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600">{product?.qnt} units</p>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Minimum Order Quantity</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 mr-3">{product?.minimumQnt} units</p>
                        </div>
                    </div>


                    <button onClick={openModal} className="btn w-full my-3">
                        Confirm your order
                    </button>


                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Description :</span>
                        </label>
                        <div className='mb-7 h-32 p-4 border-2 rounded-2xl overflow-y-auto'>
                            <p>{product?.description}</p>
                        </div>
                        <p className="text-base leading-4 mt-7 text-gray-600"><strong>Manufacturer :</strong> {product?.manufacturer}</p>
                        <p className="text-base leading-4 mt-4 text-gray-600"><strong>Brand Name :</strong> {product?.brand}</p>
                        <p className="text-base leading-4 mt-1 text-gray-600"><strong>Price per unit :</strong> <span className='text-3xl font-bold'>${product?.price}</span></p>
                    </div>

                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >

                <section className='lg:w-[500px] w-[350px]'>
                    <div className='mx-auto my-28'>
                        <div className='rounded-3xl p-7 border-2 border-gray-500 bg-white'>
                            <div className='flex items-center justify-between'>
                                <h3 className="font-bold lg:text-2xl text-lg text-center mb-4">Please confirm your order</h3>
                                <button onClick={closeModal} className='btn btn-circle btn-sm mt-[-8px]'>✕</button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Product</span>
                                    </label>
                                    <input type="text" name='productName' disabled value={product?.name} placeholder="your name" className="input input-bordered w-full " />
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
                                <input type="submit" className='btn w-full mt-4' value="Place Order" />
                            </form>
                        </div>
                    </div>
                </section>

            </Modal>
        </>
    );
};

export default Purchase;