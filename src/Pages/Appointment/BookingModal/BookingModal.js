import { data } from 'autoprefixer';
import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');//this is the appointment options
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(date, name, slot, phone, email)

        const booking = {
            appointmentDate: date,
            treatmentName: name,
            patientName,
            slot,
            email,
            phone,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle text-black" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg  font-bold text-black mb-3">{name}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col gap-5 font-normal'>
                        <input name='date' type="text" value={date} className="input text-black input-sm input-bordered w-full font-bold" disabled />
                        <select name='slot' className="select select-bordered w-full select-sm  text-black">
                            {
                                slots.map((slot, idx) => <option key={idx} >{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} readOnly type="text" placeholder="Full Name" className="text-black input input-sm input-bordered w-full " />
                        <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="Email" className=" text-black input input-sm input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className=" text-black input input-sm input-bordered w-full " />
                        <input type="Submit" value='Submit' className="text-black btn btn-sm w-full " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;