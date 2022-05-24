import React from 'react';
import { toast } from 'react-toastify';

const SingleUser = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {

        fetch(`http://localhost:5000/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status === 403) {
                    toast.error("You can't make admin. Please ask a person who is already an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully you made an admin');
                }
            })

    }

    return (
        <tr>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} class="btn btn-sm">Make Admin</button>}</td>
            <td><button class="btn btn-sm">Remove</button></td>
        </tr>
    );
};

export default SingleUser;