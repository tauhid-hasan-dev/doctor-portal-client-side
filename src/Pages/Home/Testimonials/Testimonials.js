import React from 'react';
import TestimonialCard from './TestimonialCard';
import quote from '../../../assets/icons/quote.svg'

const Testimonials = () => {
    const cardDatas = [
        {
            id: 1,
            name: "Ahmad Musa",
            from: "West Bank",
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',

        },
        {
            id: 2,
            name: "Salah Uddin",
            from: "Dhaka",
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuy2QF5dl26GM1zzDhFFgsclnp6pL86YKZvXii7IUZQHNh5ei_WSylj3KBEypCtlR7S10&usqp=CAU',

        },
        {
            id: 3,
            name: "Sultan Fatih",
            from: "Bagdad",
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: 'https://www.hagopsphotography.com/wp-content/uploads/2021/07/medical-school-application-headshot.jpg',

        },
    ]

    return (
        <div>
            <div className='flex justify-between mt-10 lg:mt-20' >
                <div className='flex flex-col justify-start items-start gap-2'>
                    <p className='text-sm lg:text-lg text-primary font-bold'>Testimonial</p>
                    <p className='text-2xl   lg:text-4xl'>What our patients says</p>
                </div>
                <div className='w-24  lg:w-36'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:py-20'>
                {
                    cardDatas?.map(card => <TestimonialCard card={card} key={card?.id} ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;