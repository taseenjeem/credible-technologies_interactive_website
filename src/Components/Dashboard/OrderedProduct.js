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
            borderRadius: '20px',
            width: "500px"
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

    const { _id, orderedProduct, orderedQuantity, productImage, productPrice, paid, transactionId } = order;

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