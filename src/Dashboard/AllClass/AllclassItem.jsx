import React from 'react';

const AllclassItem = ({classItem}) => {
    const {name,image,instructor,instructorImage,email,availableSeats,numStudents,price,status} = classItem;
    return (
        <div className='mt-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={image} className="h-80 w-80 rounded-lg shadow-2xl" />
                    <div>
                    <p><span className="text-xl font-semibold">Class Name:</span>{name}</p>
                    <p><span className="text-xl font-semibold">Instructor:</span>{instructor}</p>
                    <p><span className="text-xl font-semibold">Email:</span>{email}</p>
                    <p><span className="text-xl font-semibold">AvailableSeats:</span>{availableSeats}</p>
                    <p><span className="text-xl font-semibold">NumStudents</span>{numStudents}</p>
                    <p><span className="text-xl font-semibold">Price:</span>{price}</p>
                    <p><span className="text-xl font-semibold">Status:</span>{status}</p>
                    </div>
                    <div>
                    <button className="btn btn-primary">Button</button>
                    <button className="btn btn-secondary ml-3">Button</button>
                    <button className="btn btn-warning ml-3">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllclassItem;