import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Products from '../../../Shared/Products/Products';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
        </>
    );
};

export default Home;