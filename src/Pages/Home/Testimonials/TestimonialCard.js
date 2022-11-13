import React from 'react';

const TestimonialCard = ({ card }) => {
    return (
        <div className={`card  shadow-xl flex flex-col text-white  px-5 font-bold items-center text-center `}>

            <div className="flex flex-col items-start gap-8 p-5 ">
                <div className='text-start '>
                    <p className='font-normal text-gray-500'>{card?.description}</p>
                </div>
                <div className=' flex flex-row gap-3'>
                    <div className=''>
                        <img src={card?.img} alt="" className='w-12 h-12 rounded-full' />
                    </div>
                    <div className='flex flex-col items-start '>
                        <h2 className=" text-black ">{card?.name} </h2>
                        <h2 className=" text-black ">{card?.from} </h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TestimonialCard;