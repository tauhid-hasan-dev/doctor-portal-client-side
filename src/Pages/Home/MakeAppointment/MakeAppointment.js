import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${(appointment)})`
            }}
        >

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row justify-between p-0">
                    <div className='w-[50%] -mt-36 hidden lg:block'>
                        <img src={doctor} className="rounded-lg  " alt='' />
                    </div>

                    <div className='w-full lg:w-[50%] py-10 lg:py-0 px-5'>
                        <p className='font-bold text-primary'>Appointment</p>
                        <h1 className="text-5xl font-bold  text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MakeAppointment;