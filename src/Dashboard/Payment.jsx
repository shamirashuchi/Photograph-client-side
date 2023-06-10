import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelecteddata from '../Hooks/useSelecteddata';
import Checkout from './Checkout';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [classdata,refetch] = useSelecteddata();
    const total = classdata.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <Elements stripe={stripePromise}>
                <Checkout classdata={classdata} price={price}></Checkout>
        </Elements>
    );
};

export default Payment;