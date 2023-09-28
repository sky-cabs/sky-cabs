import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';

const BookingScreen = () => {
  const { register, handleSubmit, errors: formErrors, reset } = useForm(); // Rename errors to formErrors
  const [loading, setLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (userData) => {
    reset({ name: '', startLoc: '', endLoc: '', mobile: '' });
    userData.dateTime = startDate.toDateString();
    setLoading(true);
    fetch('/./api/email', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(userData),
    })
      .then(function (response) {
        if (!response.ok) {
          setLoading(false);
          throw new Error('Invalid Data');
        }
        return response.json();
      })
      .then(function (data) {
        setLoading(false);
        setIsBooking(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log('Invalid Data');
      });
  };
  
  return (
    <section
      id="booking"
      className="w-full flex-col bg-mustard-500 py-10 flex justify-center items-center pl-4 pr-4"
    >
      {isBooking ? (
        {/* ... Rest of your code ... */}
      ) : (
        <>
          <span className="font-bold text-3xl pb-10">Book Your Ride</span>
          <div className="w-full max-w-md bg-mustard-400 rounded-2xl p-4">
            <div className="space-y-4 text-gray-700">
              {/* ... Rest of your form code ... */}
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block mb-1">
                    Your Name
                    {/* {console.log('formErrors:', formErrors)}  */}

                    {/* Log the 'formErrors' object */}

                    {/* {formErrors.hasOwnProperty('name') && (
                     <span className="text-red-400">*Name Required</span>
                    )} */}


                    {/* {formErrors.name && (
                      <span className="text-red-400">*Name Required</span>
                    )} */}
                  </label>
                  <input
                    className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                    type="text"
                    name="name"
                    value={FormData.name}
                    onChange={(e) => handleInputChange(e)}
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              {/* ... Rest of your form code ... */}
            </div>
          </div>
          <button
            onClick={handleSubmit((data) => onSubmit(emaiil.js))}
            className="bg-charade-500 text-black text-xl py-4 px-10 mt-5 mb-16 rounded-full font-bold disabled:opacity-50 transform transition-all hover:scale-110"
            disabled={loading}
          >
            {loading ? `Booking...` : `Book Now`}
          </button>
        </>
      )}
    </section>
  );
};

export default BookingScreen;
