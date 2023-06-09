import React from 'react';
import { useQuery } from "@tanstack/react-query";
import AllclassItem from './AllclassItem';
const AllClass = () => {
    const { data: classes = [], refetch } = useQuery(['class'], async () => {
        const res = await fetch('http://localhost:2000/class')
        return res.json();
    })
    return (
        <div className='grid grid-cols-2 gap-4'>
            {classes.map(classItem => <AllclassItem
        key={classItem.id}
        classItem={classItem}>
          </AllclassItem>
      )}
        </div>
    );
};

export default AllClass;