import React from 'react';
import useSelecteddata from '../../Hooks/useSelecteddata';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
const Myclass = () => {
    const [classdata,refetch] = useSelecteddata();
    const total = classdata.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/selects/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {classdata.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
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
                            <th>Action</th>
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
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                {/* <Link to={`/dashboard/payment?id=${item.selectedItemId}`}>
                                        <button className="btn btn-warning w-1/2 ml-56">PAY</button>
                                </Link> */}
                                {/* <Link to={`/dashboard/payment?id=${item._id}${item.selectedItemId}`}>
                                        <button className="btn btn-warning w-1/2 ml-56">PAY</button>
                                </Link> */}
                                {/* <Link to={`/dashboard/payment?id=${item._id}${item.selectedItemId}`}>
                                <button className="btn btn-warning w-1/2 ml-56">PAY</button>
                                </Link> */}
                                <Link to={`/dashboard/payment?id=${item._id}&selectedItemId=${item.selectedItemId}`}>
                                <button className="btn btn-warning w-1/2 ml-56">PAY</button>
                                </Link>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Myclass;