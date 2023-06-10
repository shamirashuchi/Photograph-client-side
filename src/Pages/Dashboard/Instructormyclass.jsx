import React from 'react';
import useSelecteddata from '../../Hooks/useSelecteddata';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const Instructormyclass = () => {
    const [classdata,refetch] = useSelecteddata();
    const total = classdata.reduce((sum, item) => item.price + sum, 0);
    const student = classdata.reduce((sum, item) => item.numStudents+ sum, 0);
    return (
        <div className="w-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Class: {classdata.length}</h3>
                <h3 className="text-3xl">Total Enrolled Student: {student}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classdata.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button className="btn btn-ghost bg-yellow-200  text-white">Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost bg-purple-200  text-white">Feedback</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructormyclass;