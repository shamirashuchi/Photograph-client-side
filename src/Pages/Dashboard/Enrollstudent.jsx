import React from 'react';

const Enrollstudent = ({item}) => {
    const {classinfo} =item;
    const total = classinfo.reduce((sum, eachitem) => eachitem.numStudents + sum, 0);
    return (
        <div>
            <h2>{total}</h2>
        </div>
    );
};

export default Enrollstudent;