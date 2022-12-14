import React from 'react';
import AvailableAppointment from '../../Appointment/AvailableAppointment/AvailableAppointment';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-5 lg:px-20 bg-white'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;