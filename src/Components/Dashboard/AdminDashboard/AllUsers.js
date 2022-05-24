import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import SingleUser from '../SingleUser';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch("http://localhost:5000/all-users",
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
        <div>
            <h1 className='text-center text-2xl font-semibold my-4'>All Users : {users?.length}</h1>

            <div class="overflow-x-auto px-3 lg:px-16">
                <table class="table w-full border">
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