import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className={`card  shadow-xl flex flex-col py-5 text-white  px-5 font-bold items-center text-center `}>
            <div className=''>
                <p className='text-primary font-bold'>{name}</p>
            </div>
            <div className=''>
                <p className='text-gray-500 font-normal'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-gray-500 font-normal'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            </div>
            <div className="card-body">

                <PrimaryButton>Book Appointment</PrimaryButton>
            </div>
        </div>
    );
};

export default AppointmentOption;