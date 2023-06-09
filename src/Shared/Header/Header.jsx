import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
                    <div className="navbar bg-purple-500">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <Link to="/instructor"><li><a>Instructors</a></li></Link>
                    <Link to="/class"><li><a>Class</a></li></Link>
                    <Link to="/dashboard/myclass"><li><a>Dashboard</a></li></Link>
                    {
                        user ? <>
                            <span>
                                <img className='h-8 w-8 rounded' src={user?.photoURL} alt="" />
                                </span>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-white">ClickHaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                <Link to="/"><li><a>Home</a></li></Link>
                <Link to="/instructor"><li><a>Instructors</a></li></Link>
                <Link to="/class"><li><a>Class</a></li></Link>
                <Link to="/dashboard/myclass"><li><a>Dashboard</a></li></Link>
                {
            user ? <>
                <span>
                    <img className='h-8 w-8 rounded' src={user?.photoURL} alt="" />
                    </span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
                </ul>
            </div>
            </div>
    );
};

export default Header;