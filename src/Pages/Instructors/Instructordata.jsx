import React from 'react';

const Instructordata = ({item}) => {
    const {instructorImage,instructor,email} = item;
    return (
        <div className='flex'>
               <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full h-96'  src={instructorImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p><span className='font-semibold text-xl'>Instructorname:</span> {instructor}</p>
                        <p><span className='font-semibold text-xl'>Email:</span> {email}</p>
                    </div>
                </div>
        </div>
    );
};

export default Instructordata;