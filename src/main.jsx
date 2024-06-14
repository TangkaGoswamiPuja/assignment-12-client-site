import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Paths/Paths';
import Auth from './Authfile/Auth';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth> 
   <QueryClientProvider client={queryClient}>
   <div className='max-w-screen-xl mx-auto font-mono'> 
         <RouterProvider router={router} />

</div>
    </QueryClientProvider>
   

</Auth>
  </React.StrictMode>,
)
