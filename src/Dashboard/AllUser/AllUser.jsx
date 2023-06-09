import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const AllUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user =>{
        fetch(`http://localhost:2000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user =>{
        fetch(`http://localhost:2000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="w-full">
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Makeadmin</th>
                        <th>MakeInstructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                             <td>{ user.role === 'instructor' ? 'instructor' :
                                <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUser;