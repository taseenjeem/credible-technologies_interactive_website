import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import quote from '../../Assets/Icons/quote.png';
import Loading from '../Loading/Loading';
import Review from './Review';
import { FaArrowRight } from 'react-icons/fa';

const Reviews = () => {


    const { data: reviews, isLoading } = useQuery("reviewsForHomePage", () => fetch("https://credible-technologies-server.onrender.com/all-reviews")
        .then(res => res.json()))

    const onlyThreeReview = reviews?.slice(0, 3);

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='mx-auto max-w-screen-xl px-3 mt-28'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Reviews</h3>
                    <h1 className='text-4xl font-semibold my-2'>What Our Customer Say</h1>
                </div>
                <img className='lg:w-48 w-24' src={quote} alt="" />
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-7 gap-20 mt-28 lg:mt-20'>

                {
                    onlyThreeReview?.map(r => <Review key={r.id} review={r} />)
                }

            </div>
            <div className='flex justify-center mt-14'>
                <Link to="/reviews" className='btn btn-primary text-white'>Show all Reviews<FaArrowRight className='ml-2' /></Link>
            </div>
        </section>
    );
};

export default Reviews;