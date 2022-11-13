import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardDatas = [
        {
            id: 1,
            name: "Opening Hours",
            description: 'We are open from morning to night',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: "Visit Our Location",
            description: 'We are open from morning to night',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact Us Now",
            description: 'We are open from morning to night',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 lg:py-20'>
            {
                cardDatas?.map(card => <InfoCard key={card.id} card={card} ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;