import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
const Dashboard = () => {
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
                <li><Link to="/dashboard/myclass"><SiGoogleclassroom></SiGoogleclassroom>Myclass</Link></li>
                <li><a>Sidebar Item 2</a></li>
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