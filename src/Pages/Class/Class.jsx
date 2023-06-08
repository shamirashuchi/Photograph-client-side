import React, { useEffect } from 'react';
import useInstructorclass from '../useInstructorclass';
import Classdata from './Classdata';

const Class = () => {
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
                    data.map(item => <Classdata
                    key = {item._id}
                    item = {item}
                    ></Classdata>)
                 }
            </div>
  );
};

export default Class;
