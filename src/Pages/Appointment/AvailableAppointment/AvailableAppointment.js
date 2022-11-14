import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    console.log(appointmentOptions);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='flex justify-center text-primary font-bold'>
            <p>Available Appointments on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;