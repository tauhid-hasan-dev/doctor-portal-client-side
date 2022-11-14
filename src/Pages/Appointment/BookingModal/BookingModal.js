import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment; //this is the appointment options
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle text-black" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg  font-bold text-black mb-3">{name}</h3>
                    <form className='flex flex-col gap-5 font-normal'>
                        <input type="text" value={format(selectedDate, 'PP')} className="input text-black input-sm input-bordered w-full " disabled />
                        <select className="select select-bordered w-full select-sm  text-black">
                            {
                                slots.map(slot => <option >{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className="text-black input input-sm input-bordered w-full " />
                        <input type="text" placeholder="Phone Number" className=" text-black input input-sm input-bordered w-full " />
                        <input type="text" placeholder="Email" className=" text-black input input-sm input-bordered w-full " />
                        <input type="Submit" value='Submit' className="text-black btn btn-sm w-full " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;