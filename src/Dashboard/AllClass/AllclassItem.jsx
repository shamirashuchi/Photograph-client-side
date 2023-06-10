import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllclassItem = ({classItem,refetch}) => {
    const {_id,name,image,instructor,instructorImage,email,availableSeats,numStudents,price,status} = classItem;
    const handleMakeApproved = classItem =>{
        fetch(`http://localhost:2000/class/approve/${_id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${classItem.name} class is approved`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeDenied = classItem =>{
        fetch(`http://localhost:2000/class/denied/${_id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${classItem.name} class is denied`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='my-5'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={image} className="h-80 w-80 rounded-lg shadow-2xl" />
                    <div>
                    <p><span className="text-xl font-semibold">Class Name:</span>{name}</p>
                    <p><span className="text-xl font-semibold">Instructor:</span>{instructor}</p>
                    <p><span className="text-xl font-semibold">Email:</span>{email}</p>
                    <p><span className="text-xl font-semibold">AvailableSeats:</span>{availableSeats}</p>
                    <p><span className="text-xl font-semibold">NumStudents:</span>{numStudents}</p>
                    <p><span className="text-xl font-semibold">Price:</span>{price}</p>
                    <p><span className="text-xl font-semibold">Status:</span>{status}</p>
                    </div>
                    <div>
                    {
                        status === 'approved' ? <button className="btn btn-primary">Approved</button> :
                        <button onClick={() => handleMakeApproved(classItem)} className="btn btn-primary">Approve</button>
                    }
                    {
                        status === 'denied' ? <button className="btn btn-secondary ml-3">Denied</button> :
                    <button onClick={() => handleMakeDenied(classItem)}  className="btn btn-secondary ml-3">Deny</button>
                    }
                    <Link to="/dashboard/feedback"><button className="btn btn-warning ml-3">Send Feedback</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllclassItem;