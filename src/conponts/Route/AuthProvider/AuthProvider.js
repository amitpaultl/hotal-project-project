import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authantion/Authantion';

const AuthProvider = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    const location = useLocation()
    if(loader){
        return <div>Loding....</div>
    }

    if(user){
        return children
    }else{
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
   
};

export default AuthProvider;