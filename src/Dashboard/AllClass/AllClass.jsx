import React from 'react';
import { useQuery } from "@tanstack/react-query";
const AllClass = () => {
    const { data: classes = [], refetch } = useQuery(['class'], async () => {
        const res = await fetch('http://localhost:2000/class')
        return res.json();
    })
    return (
        <div>
            <h2>{classes.length}</h2>
        </div>
    );
};

export default AllClass;