import React from 'react';

const ClassItem = ({item}) => {
    const {image,numStudents} = item;
    return (
        <div className='flex'>
        <img className='h-80 w-80' src={image} alt="Movie"/>
        </div>
    );
};

export default ClassItem;