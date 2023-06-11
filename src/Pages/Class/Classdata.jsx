import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelecteddata from '../../Hooks/useSelecteddata';

const Classdata = ({item}) => {
    const {image,name,instructor,availableSeats,price,_id,instructorImage,status,numStudents} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useSelecteddata();
    const navigate = useNavigate();
    const location = useLocation();
    const handleselecteddata = item => {
        console.log(item);
        if(user && user.email){
            const selectedItem = {selectedItemId: _id, name, image,instructor,email: user.email,instructorImage,numStudents,availableSeats, price,status}
            fetch('http://localhost:2000/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class added.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className='flex'>
               <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full h-96'  src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2><span className='font-semibold text-xl'>Classname:</span> {name}</h2>
                        <p><span className='font-semibold text-xl'>Instructorname:</span> {instructor}</p>
                        <p><span className='font-semibold text-xl'>AvailableSeats:</span> {availableSeats}</p>
                        <p><span className='font-semibold text-xl'>Num of Students:</span> {numStudents}</p>
                        <p><span className='font-semibold text-xl'>Price:</span> ${price}</p>
                        <div className="card-actions justify-end">
                        <button onClick={() => handleselecteddata(item)} className="btn bg-purple-600">Select</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Classdata;