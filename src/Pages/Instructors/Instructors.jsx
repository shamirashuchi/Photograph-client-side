import React, { useEffect } from 'react';
import useInstructorclass from '../useInstructorclass';
import Instructordata from './Instructordata';

const Instructors = () => {
const [refetch, data] = useInstructorclass();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (!data) {
    return <div>Loading...</div>;
  }

    return (
        <div className='mt-10 grid md:grid-cols-3 grid-cols-2 gap-10'>
                 {
                    data.map(item => <Instructordata
                    key = {item._id}
                    item = {item}
                    ></Instructordata>)
                 }
        </div>
    );
};

export default Instructors;