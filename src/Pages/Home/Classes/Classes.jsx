import React from 'react';
import useClass from '../../../Hooks/useClass';
import ClassItem from './ClassItem';

const Classes = () => {
    const [data] = useClass();
    const firstSixItems = data.slice(0, 6);
    return (
        <div>
            <h2 className='text-5xl mt-10 text-center text-purple-600 underline'>Popular Classes</h2>
            <div className='mt-10 grid md:grid-cols-3 grid-cols-2 gap-10'>
                 {
                    firstSixItems.map(item => <ClassItem
                    key = {item._id}
                    item = {item}
                    ></ClassItem>)
                 }
            </div>
        </div>
    );
};

export default Classes;