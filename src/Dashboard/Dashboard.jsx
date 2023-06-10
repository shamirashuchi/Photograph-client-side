import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { AuthContext } from '../Providers/Authprovider';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import useStudent from '../Hooks/useStudent';
const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] =useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    
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
                    isInstructor &&
                    <>
                         <li><Link to="/dashboard/addclass">Add Class</Link></li>  
                         <li><Link to="/dashboard/myclass"><SiGoogleclassroom></SiGoogleclassroom>Myclass</Link></li>
                    </>
                }
                {
                    isStudent &&
                    <>
                    <li><Link to="/dashboard/myclass"><SiGoogleclassroom></SiGoogleclassroom>Myclass</Link></li>
                    </>
                }
                <div className="divider"></div>
                <Link to="/"><li><a>Home</a></li></Link>
                <Link to="/instructor"><li><a>Instructors</a></li></Link>
                <Link to="/class"><li><a>Class</a></li></Link>
                </ul>
           </div>
           </div>
        </div>
    );
};

export default Dashboard;