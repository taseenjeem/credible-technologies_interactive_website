import React from 'react';

const SingleUser = ({ user, refetch }) => {

    const { email } = user;

    return (
        <tr>
            <td>{email}</td>
            <td><button class="btn btn-sm">Make Admin</button></td>
            <td><button class="btn btn-sm">Remove</button></td>
        </tr>
    );
};

export default SingleUser;