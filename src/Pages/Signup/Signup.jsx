import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { getAuth } from 'firebase/auth';

const Signup = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {logOut, createuser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createuser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const auth = getAuth();
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        logOut();
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };

    return (
     <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-purple-600">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-purple-600">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-purple-600">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-purple-600">Password</span>
                    </label>
                    <input type="password" {...register("password", { required: true,minLength:6,maxLength: 20,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="password" className="input input-bordered" />
                    {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                    {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less then 20 character</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-purple-600">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn bg-purple-600" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-purple-600'><small>Already have an account <Link to="/login">Login</Link></small></p>
                {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
          </div>
        </>
    );
};

export default Signup;