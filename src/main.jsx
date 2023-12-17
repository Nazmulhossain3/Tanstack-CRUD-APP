import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home';
import EditPost from './Pages/Home/EditPost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [{
      path : '/',
      element : <Home></Home>
    },
    {
      path : "/post/:id/edit",
      element : <EditPost></EditPost>
    }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
