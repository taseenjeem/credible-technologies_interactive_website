import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import EachReview from './EachReview';


const AllReviews = () => {

    const { data: reviews, isLoading } = useQuery("reviewsForHomePage", () => fetch("https://credible-technologies-server.onrender.com/all-reviews")
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='lg:px-28 px-3 my-28'>

            <PageTitle title="Reviews" />

            <h1 className='text-primary text-center text-4xl font-semibold mt-14'>Customer Reviews</h1>

            <div className='grid lg:grid-cols-3 gap-7 mt-16'>
                {
                    reviews?.map(r => <EachReview key={r._id} review={r} />)
                }
            </div>
        </section>
    );
};

export default AllReviews;