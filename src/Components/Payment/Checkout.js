import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { toast } from 'react-toastify';

const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

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
            toast.error(`${error?.message}`)
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
            <button type="submit" className='btn btn-success btn-sm mt-4' disabled={!stripe}>
                Continue payment
            </button>
        </form>
    );
};

export default Checkout;