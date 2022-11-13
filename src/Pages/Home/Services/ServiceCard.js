import React from 'react';

const ServiceCard = ({ serviceCard }) => {
    return (
        <div className={`card  shadow-xl flex flex-col py-5 text-white  px-5 font-bold items-center text-center `}>
            <div className=''>
                <img src={serviceCard?.icon} alt="" />
            </div>
            <div className="card-body">
                <div className='flex justify-center text-gray-700'>
                    <h2 className="card-title">{serviceCard?.name}</h2>
                </div>
                <p className='font-light text-gray-500'>{serviceCard?.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;