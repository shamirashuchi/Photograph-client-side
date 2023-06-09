import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { AuthContext } from '../Providers/Authprovider';
const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const isAdmin =true;
    const isinstructor = false;
    return (
        <div>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-purple-600 text-white">
                {/* Sidebar content here */}
                {
                    isAdmin &&
                    <>
                    <li><Link to="/dashboard/allclass">All Class</Link></li>
                    <li><Link to="/dashboard/alluser">All User</Link></li>
                    </>
                }
                {
                    isinstructor &&
                    <>
                         <li><Link>Add Class</Link></li>  
                    </>
                }
                <div className="divider"></div>
                <Link to="/"><li><a>Home</a></li></Link>
                <Link to="/instructor"><li><a>Instructors</a></li></Link>
                <Link to="/class"><li><a>Class</a></li></Link>
                <li><Link to="/dashboard/myclass"><SiGoogleclassroom></SiGoogleclassroom>Myclass</Link></li>
                </ul>
           </div>
           </div>
        </div>
    );
};

export default Dashboard;