import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentoptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col justify-center  items-center text-primary font-bold'>
            <p className='py-10'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-5 lg:px-20'>
                {
                    appointmentOptions?.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    >
                    </AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;