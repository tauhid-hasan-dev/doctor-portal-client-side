import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section
            style={{
                background: `url(${(bg)})`
            }}
        >
            <div className="hero py-8  lg:py-20  ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-36"  >
                    <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='flex flex-col items-start'>
                        <DayPicker
                            mode="single"
                            //Single- we will pick only one date
                            //Not Single - we will select a range of date(like for hotel booking)
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