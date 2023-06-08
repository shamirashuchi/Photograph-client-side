import React, { useContext, useEffect,useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/Authprovider';
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card lg:w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-purple-600">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered w-80"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-purple-600">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-80" />
                    </div>
                    <div className="form-control mt-6">
                    <input disabled={false} className="btn bg-purple-600 w-80" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-purple-600'><small>New Here?<Link to="/signup">create an account</Link></small></p>
                {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;