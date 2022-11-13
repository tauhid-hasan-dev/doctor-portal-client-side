import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-20'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
        </div>
    );
};

export default Home;