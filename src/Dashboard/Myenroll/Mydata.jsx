import React from 'react';

const Mydata = ({classItem}) => {
    return (
        <div>
            <div className="mt-10">
            <div className="hero min-h-min bg-base-200">
                <div className="hero-content flex-row">
                <img src={classItem.image} className="h-80 w-80 rounded-lg shadow-2xl" />

               <div>
               <p>
                  <span className="text-xl font-semibold">Class Name:</span>
                  {classItem.name}
                </p>
                <p>
                  <span className="text-xl font-semibold">Instructor:</span>
                  {classItem.instructor}
                </p>
                <p>
                  <span className="text-xl font-semibold">Email:</span>
                  {classItem.email}
                </p>
                <p>
                  <span className="text-xl font-semibold">Available Seats:</span>
                  {classItem.availableSeats}
                </p>
                <p>
                  <span className="text-xl font-semibold">Number of Students:</span>
                  {classItem.numStudents}
                </p>
                <p>
                  <span className="text-xl font-semibold">Price:</span>
                  {classItem.price}
                </p>
                <p>
                  <span className="text-xl font-semibold">Status:</span>
                  {classItem.status}
                </p>
               </div>
              </div>
              </div>
      </div>
    </div>
    );
};

export default Mydata;