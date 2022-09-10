import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import PageTitle from '../PageTitle/PageTitle';
import Community from './Community';
import Delivery from './Delivery';
import EasyReturn from './EasyReturn';
import Faq from './Faq';
import OtherServices from './OtherServices';
import ProductsForHomePage from './ProductsForHomePage';
import Reviews from './Reviews';
import Work from './Work';

const Home = () => {
    return (
        <section>

            <PageTitle title="Home" />

            <Banner />
            <BusinessSummery />
            <OtherServices />
            <Work />
            <ProductsForHomePage />
            <Delivery />
            <EasyReturn />
            <Reviews />
            <Faq />
            <Community />
        </section>
    );
};

export default Home;