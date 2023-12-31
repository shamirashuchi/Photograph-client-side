import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelecteddata from '../Hooks/useSelecteddata';
import Checkout from './Checkout';
import { useLocation, useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const id = searchParams.get('id');
   
    // console.log(id);
//     const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const id = searchParams.get('id');
//   const selectedItemId = searchParams.get('selectedItemId');

//   console.log(id, selectedItemId);
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const selectedItemId = searchParams.get('selectedItemId');
    console.log(id, selectedItemId);

    const [classdata,refetch] = useSelecteddata();
    const total = classdata.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <Elements stripe={stripePromise}>
                <Checkout id={id} selectedItemId={selectedItemId} refetch={refetch} classdata={classdata} price={price}></Checkout>
        </Elements>
    );
};

export default Payment;