import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';
import OrderedProduct from './OrderedProduct';

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery("getMyOrders", () => fetch(`https://credible-technologies-server.onrender.com/my-orders?customerEmail=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
        }))

    if (isLoading) {
        return <Loading />
    };

    return (
        <>
            {
                orders?.length === 0 ?


                    <h1 className='text-2xl lg:text-5xl lg:mt-40 mt-56 text-center'>Sorry! You do not placed any order yet. 😥</h1>


                    :

                    <section className='lg:px-20 px-3'>
                        <h1 className='text-center text-2xl font-semibold my-4'>Your Orders : {orders?.length}</h1>

                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>

                                        <th>Product</th>
                                        <th>Ordered Quantity</th>
                                        <th>Total Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        orders?.map(order => <OrderedProduct key={order._id} order={order} refetch={refetch} />)
                                    }

                                </tbody>
                                <tfoot>
                                    <tr>

                                        <th>Product</th>
                                        <th>Ordered Quantity</th>
                                        <th>Total Price</th>
                                        <th></th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>

                    </section>
            }
        </>
    );
};

export default MyOrders;