import React from 'react';

const Instructoritem = ({item}) => {
    const {instructorImage,instructor,email,name,numStudents} = item;
    return (
        <div className='flex'>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={instructorImage} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name:{instructor}</h2>
                    <p>Email:{email}</p>
                    <p>Criteria:{name}</p>
                    <p>NumOfStudent:{numStudents}</p>
                </div>
                </div>
        </div>
    );
};

export default Instructoritem;