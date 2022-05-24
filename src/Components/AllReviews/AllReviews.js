import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import EachReview from './EachReview';


const AllReviews = () => {

    const { data: reviews, isLoading } = useQuery("reviewsForHomePage", () => fetch("http://localhost:5000/all-reviews")
        .then(res => res.json()))

    if (isLoading) {
        <Loading />
    }

    return (
        <section className='lg:px-28 px-3'>

            <PageTitle title="Reviews" />

            <h1 className='text-primary text-center text-4xl font-semibold my-14'>Customer Reviews</h1>

            <div className='grid lg:grid-cols-3 gap-7 my-28'>
                {
                    reviews?.map(r => <EachReview key={r.id} review={r} />)
                }
            </div>
        </section>
    );
};

export default AllReviews;