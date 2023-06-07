import React from 'react';
import useClass from '../../../Hooks/useClass';
import Instructoritem from './Instructoritem';

const Instructors = () => {
    const [data] = useClass();
    const firstSixItems = data.slice(0, 6);
    return (
        <div>
            <h2 className='text-5xl mt-10 text-center text-purple-600 underline'>Popular Instructors</h2>
            <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-10'>
                 {
                    firstSixItems.map(item => <Instructoritem
                    key = {item._id}
                    item = {item}
                    ></Instructoritem>)
                 }
            </div>
        </div>
    );
};

export default Instructors;