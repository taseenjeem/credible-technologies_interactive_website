import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Checkout = ({ price, productDetails }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    console.log(price);

    useEffect(() => {
        fetch('https://credible-technologies.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])

    const handleSubmit = async (event) => {

        event.preventDefault()

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${error?.message}`,
                showConfirmButton: false,
                timer: 2000
            })
        };



        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productDetails?.customerName,
                        email: productDetails?.customerEmail
                    },
                },
            },
        );

        if (intentError) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${intentError?.message}`,
                showConfirmButton: false,
                timer: 2000
            })

        } else {
            setTransactionId(paymentIntent?.id)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment Completed Successfully',
                showConfirmButton: false,
                timer: 2000
            })

            const payment = {
                product: productDetails?._id,
                transactionId: paymentIntent.id
            }
            fetch(`https://credible-technologies.herokuapp.com/payment/${productDetails?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })

        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-success btn-sm mt-4' disabled={!stripe || !clientSecret}>
                Continue payment
            </button>
            {
                transactionId !== "" && <div className='text-green-500 mt-3'>
                    <p>Your transaction ID : <span className="font-bold">{transactionId}</span> </p>
                </div>
            }
        </form>
    );
};

export default Checkout;