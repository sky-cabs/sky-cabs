import React, { useState } from 'react';
import 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
        type="text"
        name="name"
        placeholder="Your Name"
        ref={register({ required: true })}
      />
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
        type="email"
        name="email"
        placeholder="Your Email"
        ref={register({ required: true })}
      />
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
        type="text"
        name="message"
        placeholder="Your Message"
        ref={register({ required: true })}
      />
      <button
        type="submit"
        className="bg-charade-500 text-white text-xl py-4 px-10 mt-5 mb-16 rounded-full font-bold disabled:opacity-50 transform transition-all hover:scale-110"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
