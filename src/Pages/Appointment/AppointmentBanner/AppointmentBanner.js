import React, { useState } from 'react';
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
        <section
            style={{
                background: `url(${(bg)})`
            }}
        >
            <div className="hero py-8  lg:py-20  ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-36"  >
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;