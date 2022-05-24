import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        toast.warning("You need to login first");
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default RequireAuth;