import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const Addclass = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image', data.image[0])
        formData.append('instructorImage', data.instructorImage[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,image,instructor,instructorImage,email,availableSeats,numStudents,price,status} = data;
                const newItem = {name,image:imgURL,instructor,email,availableSeats:parseFloat(availableSeats),numStudents:parseFloat(numStudents),price: parseFloat(price),status,instructorImage:imgURL}
                console.log(newItem);
                axiosSecure.post('/class', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };
    console.log(img_hosting_token);
    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
           <div className='bg-slate-100 p-10'>
           <div className='flex'>
           <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Class Image</span>
                </label>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs ml-10">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <select {...register("name", { required: true, maxLength: 120 })} className="select select-bordered">
                        <option disabled selected>Pick one </option>
                        <option>Travel Photography Adventure</option>
                        <option>Food Photography Masterclass</option>
                        <option>Fashion Photography Intensive Course</option>
                        <option>Astrophotography Night Sky Tour</option>
                        <option>Street Photography Workshop</option>
                        <option>Wildlife Photography Expedition</option>
                        <option>Portrait Photography Masterclass</option>
                        <option>Introduction to Landscape Photography</option>
                    </select>
            </div>
            </div>
            <div className='flex'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Instructor Name</span>
                </label>
                <input type="text" placeholder="Type here" {...register("instructor", { required: true })} className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} />
            </div>
            <div className="form-control w-full max-w-xs ml-10">
                <label className="label">
                    <span className="label-text">Instructor Image</span>
                </label>
                <input type="file" {...register("instructorImage", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            </div>
            <div className='flex'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Instructor Email</span>
                </label>
                <input type="email" placeholder="Type here" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" defaultValue={user?.email} />
            </div>
            <div className="form-control w-full max-w-xs ml-10">
                <label className="label">
                    <span className="label-text">Available Seats</span>
                </label>
                <input type="number" placeholder="Type here" {...register("availableSeats", { required: true })} className="input input-bordered w-full max-w-xs" />
            </div>
            </div>
            <div className='flex'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Number of Students</span>
                </label>
                <input type="number" placeholder="Type here" {...register("numStudents", { required: true })} className="input input-bordered w-full max-w-xs" defaultValue={0} />
            </div>
            <div className="form-control w-full max-w-xs ml-10">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number"  placeholder="Type here" {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
            </div>
            </div>
            <div className="form-control w-full max-w-xs ml-48">
                <label className="label">
                    <span className="label-text">Status</span>
                </label>
                <input type="text" placeholder="Type here" {...register("status", { required: true })} className="input input-bordered w-full max-w-xs" defaultValue={"pending"} />
            </div>
            <input className="btn btn-block mt-4" type="submit" value="Add class" />
           </div>
        </form>
    );
};

export default Addclass;