import React from 'react';

const Myenrollclass = ({item}) => {
    const {price,transactionId,quantity,date,itemNames,email} = item;
    return (
        <div>
            <div className="card  bg-base-300 shadow-xl mx-40 my-40">
                <div className="card-body">
                    <p><span className='text-xl font-semibold'>Email:</span> {email}</p>
                    <p><span className='text-xl font-semibold'>Quantity:</span> {quantity}</p>
                    <p><span className='text-xl font-semibold'>Price:</span> {price}</p>
                    <p><span className='text-xl font-semibold'>Date:</span> {date}</p>
                    <p><span className='text-xl font-semibold'>TransactionId:</span> {transactionId}</p>
                </div>
                </div>
        </div>
    );
};

export default Myenrollclass;