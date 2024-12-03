import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> , 
    children:[
      {
        path: '/',
       element: <Home /> ,
       loader: ()=>fetch('http://localhost:5000/coffee'),
    }
,
      {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'UpdateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
       loader:({params}) =>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'login',
        element: <Login></Login>,
    
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
      ,
      {
        path:'user',
        element:<User></User>,
        loader: ()=> fetch('http://localhost:5000/users')
      }
    ]
  },


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
      
    </AuthProvider>
  </StrictMode>,
)
