import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTests from "../Pages/All-tests/AllTests";
import Login from "../Pages/Log&reg/Login";
import Reg from "../Pages/Log&reg/Reg";
import UserDb from "../Pages/DashBoard/UserDB/UserDb";
import AdminDb from "../Pages/DashBoard/AdminDB/AdminDb";
import Private from "../Authfile/Private";
import Details from "../Pages/All-tests/Details";
import Dashboard from "../Pages/DashBoard/Dashboard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {path:'/',
            element:<Home></Home>
        },
        {
            path:"/alltest",
            element:<AllTests></AllTests>
        },
        {
          path: '/details/:id',
          element: <Private><Details></Details></Private>,
          loader: ({params}) => fetch(`http://localhost:5000/alltest/${params.id}`)

      },
        {
          path:"/login",
          element:<Login></Login>
        },
        {path:"/register",
          element:<Reg></Reg>
        },

       
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
      //   {path:"dashboard",
      //   element:<Dashboard></Dashboard>,
      // },
        {path:"userDb",
element: <Private><UserDb></UserDb> </Private>    
 },
      {path:"adminDb",
        element: <AdminDb></AdminDb>
      }
      ]
    },
  ]);