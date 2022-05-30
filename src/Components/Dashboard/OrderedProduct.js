import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

const OrderedProduct = ({ order, orders, setOrders }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '30px'
        },
    };

    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function openModal2() {
        setIsOpen2(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    function closeModal2() {
        setIsOpen2(false);
    }

    const { _id, orderedProduct, orderedQuantity, productImage, productPrice, paid, transactionId, customerName, customerEmail, customerPhone, customerAddress } = order;

    const totalPrice = Number(orderedQuantity) * Number(productPrice);

    const handleDelete = () => {
        const url = `https://credible-technologies.herokuapp.com/delete-order/${_id}`;


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
                                <button onClick={openModal} className="btn btn-error btn-sm">Delete</button>
                            </div>

                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <h1 className='text-center  text-xl font-bold'>Are you sure for delete?</h1>

                                <div className='flex justify-evenly mt-10'>

                                    <button className="btn" onClick={() => {
                                        handleDelete(_id);
                                        closeModal();
                                    }} >Yes!!</button>

                                    <button className="btn" onClick={closeModal}>cancel</button>

                                </div>

                            </Modal>

                        </>
                        :
                        <>
                            <div className='flex'>
                                <p className='mx-auto text-green-600 mb-2'>PAID<BsFillCheckCircleFill className='text-green-600 inline-block -mt-1 text-lg ml-2' /></p>
                                <button onClick={openModal2} className='btn btn-xs ml-2'>Details</button>
                            </div>

                            <Modal
                                isOpen={modalIsOpen2}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <div className='w-[300px] lg:w-[500px]'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-xl lg:text-2xl text-center font-bold'>Order Details</h1>
                                        <button onClick={closeModal2} className='btn btn-circle btn-sm'>✕</button>
                                    </div>
                                    <img className='w-52 mx-auto my-4' src={productImage} alt="" />
                                    <h1 className='text-xl font-semibold'>{orderedProduct}</h1>
                                    <h2 className='text-xl font-semibold mt-2'>Order no : #{_id}</h2>
                                    <p className='mt-2'><strong>Transaction ID : </strong><span className='text-green-600 font-bold'>{transactionId}</span></p>
                                    <p className='mt-2'><strong>Name : </strong>{customerName}</p>
                                    <p className='mt-2'><strong>Email : </strong>{customerEmail}</p>
                                    <p className='mt-2'><strong>Phone : </strong>{customerPhone}</p>
                                    <p className='mt-2'><strong>Ordered Quantity : </strong>{orderedQuantity} units</p>
                                    <p className='mt-2'><strong>Price per unit : </strong>$ {productPrice}</p>
                                    <p className='mt-2'><strong>Total Price : </strong>$ {totalPrice}</p>
                                    <p className='mt-2'><strong>Delivery Address : </strong>{customerAddress}</p>
                                </div>

                            </Modal>

                        </>
                }

            </th>
        </tr>

    );
};

export default OrderedProduct;