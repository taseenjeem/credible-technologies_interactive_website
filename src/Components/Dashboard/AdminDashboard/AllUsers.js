import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import SingleUser from '../SingleUser';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch("https://credible-technologies.herokuapp.com/all-users",
        {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-3 lg:px-16'>
            <h1 className='text-center text-2xl font-semibold my-4'>All Users : {users?.length}</h1>

            <div className="overflow-x-auto mb-28">
                <table className="table w-full border">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <SingleUser
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;