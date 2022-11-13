import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import cavity from '../../../assets/images/cavity.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const cardDatas = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.',
            icon: fluoride,

        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material was removed.',
            icon: cavity,

        },
        {
            id: 3,
            name: "Contact Us Now",
            description: 'Teeth whitening is one of the most popular cosmetic dentistry treatments offering a quick, non-invasive and affordable way to enhance a smile.  ',
            icon: whitening,

        },
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-2 mb-24'>
                <p className='text-lg text-primary font-bold'>OUR SERVICES</p>
                <p className='text-4xl'>Service We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    cardDatas?.map(serviceCard => <ServiceCard key={serviceCard?.id} serviceCard={serviceCard} ></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;