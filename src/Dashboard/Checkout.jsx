import React, { useContext } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from '../Providers/Authprovider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Checkout = ({classdata,price,refetch,id,selectedItemId}) => {
    const handleClick = (id) => {
            fetch(`https://photography-school-server-shamirashuchi.vercel.app/class/dec/${selectedItemId}`, {
              method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: `Available seat decreased and number of student increased`,
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            })
            .catch(error => {
              console.error(error);
            });
          }
        
      
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    //console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            //remove the item whose payment is done form classdata
            // Remove the purchased item from classdata
            // const remainingItems = classdata.filter((item) => {
            //     return !paymentIntent.itemNames.includes(item.name);
            // });
        
            // // Update classdata with the remaining items
            // classdata = remainingItems;
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: classdata.length,
                SelectedItems: classdata.map(item => item._id),
                image:classdata.map(item => item.image),
                classItems: classdata.map(item => item.selectedItemId),
                classinfo: classdata.map(item => item),
                status: 'service pending',
                itemNames: classdata.map(item => item.name)
            }
            axiosSecure.post('/payments', { ...payment, id })
            .then(res => {
              console.log(res.data);
              // if (res.data.result.insertedId) {
              //     // display confirm
              // }
            })
            .catch(error => {
              console.error(error);
            });
          

        }


    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <button onClick={() => handleClick(id)} className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};
export default Checkout;