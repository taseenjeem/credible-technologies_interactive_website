import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import PageTitle from '../PageTitle/PageTitle';
import Delivery from './Delivery';

const Home = () => {
    return (
        <section>

            <PageTitle title="Home" />

            <Banner />
            <BusinessSummery />
            <Delivery />
        </section>
    );
};

export default Home;