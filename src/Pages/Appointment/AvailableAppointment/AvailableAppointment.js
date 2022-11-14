import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    console.log(appointmentOptions);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='flex flex-col justify-center  items-center text-primary font-bold'>
            <p className='py-10'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-5 lg:px-20'>
                {
                    appointmentOptions?.map(option => <AppointmentOption key={option._id} option={option}> </AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;