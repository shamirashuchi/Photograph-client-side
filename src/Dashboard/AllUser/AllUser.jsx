import React from 'react';
import { useQuery } from "@tanstack/react-query";
const AllUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:2000/users')
        return res.json();
    })
    return (
        <div>
            <h2>{users.length}</h2>
        </div>
    );
};

export default AllUser;