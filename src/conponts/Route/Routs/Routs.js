import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Error from '../../Page/Error';
import Home from '../../Page/Home/Home';
import Login from '../../Page/Login/Login';
import Profile from '../../Page/Profile/Profile';
import Selector from '../../Page/Selector/Selector';
import SingUp from '../../Page/SingUp/SingUp';
import Root from '../../Share/Root/Root';
import AuthProvider from '../AuthProvider/AuthProvider';


    export const route = createBrowserRouter([
        {
            path: "/",
            element: <Root></Root>,
            children:[
                {
                    path: "/singup",
                    element:<SingUp></SingUp>,
                },
                {
                    path: "/a",
                    element:<AuthProvider><Error></Error></AuthProvider>,
                },
                {
                    path: "/profile",
                    element:<AuthProvider><Profile></Profile></AuthProvider>,
                },
                {
                    path: "/login",
                    element:<Login></Login> ,
                },
                {
                    path: "/c/:id",
                    element:<AuthProvider><Selector></Selector></AuthProvider> ,
                    loader: async({params})=>{
                        return fetch(`https://hotal-server.vercel.app/hotal/${params.id}`)
                    }
                },
                {
                    path: "/",
                    loader: ()=> fetch('https://hotal-server.vercel.app/hotal'),
                    element:<Home></Home> ,
                },
            ]
        },
    ])
    
