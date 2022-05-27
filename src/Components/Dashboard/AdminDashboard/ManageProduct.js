import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

const ManageProduct = ({ product, refetch }) => {

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

    const { _id, name, img, brand, manufacturer, price, qnt, description, minimumQnt } = product;

    const handleDelete = id => {
        const url = `https://credible-technologies.herokuapp.com/delete-product/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Data deleted successfully");
                refetch();
            })
    }

    return (
        <div>
            <div className="card bg-white shadow-xl">
                <figure><img src={img} className="w-40" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <h3 className='text-xl font-semibold'>Price : ${price}</h3>
                    <p className='text-sm'>Brand: <strong>{brand}</strong></p>
                    <p className='text-sm'>Manufacturer: <strong>{manufacturer}</strong></p>
                    <p className='text-sm'>Available Quantity: <strong>{qnt}</strong></p>
                    <p className='text-sm'>Minimum Order Quantity: <strong>{minimumQnt}</strong></p>
                    <p className='my-3 text-gray-500'>{description?.length > 250 ? description.slice(0, 250) + "..." : description}</p>
                    <div className="card-actions justify-between">
                        <button onClick={openModal} className="btn modal-button">Delete</button>
                        <Link to={`/dashboard/update-a-product/${_id}`}><button className="btn">Update Info</button></Link>
                        <Link to={`/dashboard/update-product-quantity/${_id}`}><button className="btn">Update Quantity</button></Link>
                    </div>
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

            </div>
        </div>
    );
};

export default ManageProduct;