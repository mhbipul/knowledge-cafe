import React from 'react';
import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet >
                <title>Career Hub | Home </title>
            </Helmet>
            <Banner />
            <CatagoryList />
            <FeaturedJobs />
            
        </div>
    );
};

export default Home;