import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <div>

            <PageTitle title="Home" />

            <Banner />
            <BusinessSummery />
        </div>
    );
};

export default Home;