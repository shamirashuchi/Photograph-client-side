import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";
import Class from "../Pages/Class/Class";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Myclass from "../Pages/Dashboard/Myclass";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/instructor',
          element:<Instructors></Instructors>
        },
        {
          path:'/class',
          element:<Class></Class>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"myclass",
          element:<Myclass></Myclass>
        }
      ]
    }
  ]);