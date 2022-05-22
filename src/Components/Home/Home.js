import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <section>

            <PageTitle title="Home" />

            <Banner />
            <BusinessSummery />
        </section>
    );
};

export default Home;