import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Paths/Paths';
import Auth from './Authfile/Auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth> <div className='max-w-screen-xl mx-auto font-mono'> 
         <RouterProvider router={router} />

</div></Auth>
  </React.StrictMode>,
)
