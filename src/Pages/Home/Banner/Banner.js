import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <section
            style={{
                background: `url(${(bg)})`
            }}
        >
            <div className="hero py-8  lg:py-20  ">
                <div className="hero-content flex-col lg:flex-row-reverse" >
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;