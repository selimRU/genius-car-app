import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './components/Routes/Routes.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-6xl mx-auto mt-5'>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router}>

        </RouterProvider>
      </React.StrictMode>
    </AuthProvider>
  </div>
)
