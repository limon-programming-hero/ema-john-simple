import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from './../../App';

function PrivateRoute({ children }) {
    const [userLogin, setUserLogin] = useContext(userContext);
    return userLogin.email ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;