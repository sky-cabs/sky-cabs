import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the server for email processing
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Booking successful');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="BookingForm" className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
            Mobile Number:
          </label>
          <input
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
  id="tel"
  name="Mobile Number"
  type="Number"
  placeholder="Phone"
  pattern="+1[0-9]{9}"
  value={formData.Mobile}
  onChange={handleChange}
  required
  
/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickupLocation">
            Pickup Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            placeholder="Pickup Location"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropoffLocation">
            Dropoff Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="dropoffLocation"
            name="dropoffLocation"
            type="text"
            placeholder="Dropoff Location"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
