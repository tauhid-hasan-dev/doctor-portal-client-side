import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (

        <div className="hero p-0">
            <div className="hero-content flex-col lg:flex-row justify-between py-20 lg:py-36">
                <div className='w-full lg:w-[50%]'>
                    <img src={treatment} className="rounded-lg shadow-2xl  w-[80%]" alt='' />
                </div>

                <div className='w-full lg:w-[50%]'>
                    <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default DentalCare;