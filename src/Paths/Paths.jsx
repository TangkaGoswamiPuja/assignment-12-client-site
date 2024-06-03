import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTests from "../Pages/All-tests/AllTests";

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
        }
      ]
    },
  ]);