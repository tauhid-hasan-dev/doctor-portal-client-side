import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';

const Home = () => {
    return (
        <div className='px-20'>
            <Banner></Banner>
            <InfoCards></InfoCards>
        </div>
    );
};

export default Home;