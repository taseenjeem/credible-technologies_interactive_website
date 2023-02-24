import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_test_51L3ccgKIsdxKDvTpaOsvcDQnM6MNVmya6zjC2ZsIExJdcYvvDya7xTLlTdsSjebfiifkJjhPtM5DN73pBKZOOF4x00mSrKAO1q');

const Payment = () => {

    const { id } = useParams();

    const url = `https://credible-technologies-server.onrender.com/get-payment/${id}`;

    const { data, isLoading } = useQuery(["getPayment", id], () => fetch(url,
        {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => res.json()));

    const totalPrice = Number(data?.orderedQuantity) * Number(data?.productPrice);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-3 lg:px-28'>
            <div className="card lg:card-side my-20">
                <figure><img src={data?.productImage} className='rounded-3xl mr-0 lg:mr-10' alt="Album" /></figure>
                <div className='py-5'>
                    <p>Hey, <strong>{data?.customerName}</strong></p>
                    <h2 className="text-xl my-2 font-semibold">{data?.orderedProduct}</h2>
                    <p><strong>Quantity : </strong>{data?.orderedQuantity} units</p>
                    <p><strong>Price per unit : </strong>$ {data?.productPrice}</p>
                    <p><strong>Total price : </strong>$ {totalPrice}</p>
                    <p><strong>Customer email : </strong>{data?.customerEmail}</p>
                    <p><strong>Customer phone : </strong>{data?.customerPhone}</p>
                    <p><strong>Delivery address : </strong>{data?.customerAddress}</p>

                    <div className="card-body border-2 lg:w-5/6 mt-4 rounded-3xl">

                        <Elements stripe={stripePromise}>
                            <Checkout price={totalPrice} productDetails={data} />
                        </Elements>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;