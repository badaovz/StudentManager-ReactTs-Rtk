import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


export interface PrivateRouteProps {
    children: JSX.Element 
}

const PrivateRoute = ({children}:PrivateRouteProps) => {
    const auth = localStorage.getItem('token');
    console.log('Auth: ', auth);
    
    return  auth ? children : <Navigate to='/login' />

}

export {PrivateRoute};
