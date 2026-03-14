import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if (!user) {
        return <Navigate to={"/signin"} state={location.pathname}></Navigate>;
    }
    return children;
};

export default PrivateRoute;