import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section
            style={{
                background: `url(${(appointment)})`
            }}
        >
            <div className="hero p-16">
                <div className="hero-content flex flex-col ">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-sm lg:text-lg text-primary font-bold'>Contact Us</p>
                        <p className='text-2xl text-white  lg:text-4xl'>Stay Connected With Us</p>
                    </div>
                    <div className='w-[100%] flex-col '>
                        <input type="text" placeholder="Email Address" className="w-full mb-5 input input-bordered " />
                        <input type="text" placeholder="Subject" className="w-full mb-5 input input-bordered " />
                        <textarea className="textarea textarea-bordered w-full mb-5 h-24" placeholder="Your Messeage"></textarea>
                        <div className='flex justify-center'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;