import React from 'react';

const Classdata = ({item}) => {
    const {image,name,instructor,availableSeats,price} = item;
    return (
        <div className='flex'>
               <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full h-96'  src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2><span className='font-semibold text-xl'>Classname:</span> {name}</h2>
                        <p><span className='font-semibold text-xl'>Instructorname:</span> {instructor}</p>
                        <p><span className='font-semibold text-xl'>AvailableSeats:</span> {availableSeats}</p>
                        <p><span className='font-semibold text-xl'>Price:</span> ${price}</p>
                        <div className="card-actions justify-end">
                        <button className="btn bg-purple-600">Select</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Classdata;