import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card   shadow-xl flex flex-row py-5 text-white  px-5 ${bgClass} font-bold items-center `}>
            <div className=''>
                <img src={icon} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;