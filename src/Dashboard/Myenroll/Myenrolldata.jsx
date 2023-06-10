import React from 'react';
import Mydata from './Mydata';

const Myenrolldata = ({ item }) => {
  const { classinfo, name, image, instructor, instructorImage, email, availableSeats, numStudents, price, status } = item;

  return (
        <div>
            {classinfo.map((classItem) => (
              <Mydata key={classItem._id}
              classItem={classItem}>
                </Mydata>
            ))}
          </div>
        
  );
};

export default Myenrolldata;
