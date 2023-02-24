import React from 'react';
import Swal from 'sweetalert2';

const SingleUser = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {

        fetch(`https://credible-technologies-server.onrender.com/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "You can't make admin.Please ask a person who is already an admin",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully you made and admin',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })

    }

    return (
        <tr>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-sm">Make Admin</button>}</td>
            <td><button className="btn btn-sm">Remove</button></td>
        </tr>
    );
};

export default SingleUser;