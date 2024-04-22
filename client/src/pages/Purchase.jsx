import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export default function Purchase() {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [address, setAddress] = useState(''); // Corrected typo here
    const [cardError, setCardError] = useState(''); // Added to handle card errors

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                email: email,
                address: address,
            },
        });

        if (!error) {
            console.log('PaymentMethod:', paymentMethod);
            alert('Payment Successful'); // Corrected typo here
        } else {
            console.log(error.message);
            setCardError(error.message); // Update error state
        }
    };

    return (
        <div>
            <h1>COMPLETE YOUR PURCHASE</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Shipping Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Credit Card:</label>
                    <CardElement />
                </div>
                {cardError && <div style={{ color: 'red' }}>{cardError}</div>}
                <button type="submit" disabled={!stripe}>Complete Purchase</button>
            </form>
        </div>
    );
}
