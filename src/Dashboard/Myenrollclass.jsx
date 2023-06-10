import React from 'react';

const Myenrollclass = ({item}) => {
    const {price,transactionId,quantity,date,itemNames,email} = item;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mx-40">
                <figure>
                    <div className='grid grid-cols-3 p-10'>
                    <div>
                    <p>{itemNames[0]}</p>
                    <img className='h-20 w-40' src={item.image[0]} alt="Album"/>
                    </div>
                    <div className='ml-0'>
                    <p>{itemNames[1]}</p>
                    <img className='h-20 w-40' src={item.image[1]} alt="Album"/>
                    </div>
                    <div className='ml-0'>
                    <p>{itemNames[2]}</p>
                    <img className='h-20 w-40' src={item.image[2]} alt="Album"/>
                    </div>
                    </div>
                </figure>
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