import React, {useState} from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';


export default function Purchase() {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [addess, setAddress] = useState('');
    const [creditCard, setCreditCard] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                email: email,
                address: address,
            },
        });
        
        if (!error) {
            console.log('PaymentMethod:', paymentMethod);
            alery('Payment Successful');
        } else {
            console.log(error.message);
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
        {creditCardError && <div style={{ color: 'red' }}>{creditCardError}</div>}
        <button type="submit" disabled={!stripe}>Complete Purchase</button>
    </form>
    </div>
);
}

