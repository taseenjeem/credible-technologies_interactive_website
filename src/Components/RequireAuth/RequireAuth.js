import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'You need to login first',
            showConfirmButton: false,
            timer: 2000
        })
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default RequireAuth;