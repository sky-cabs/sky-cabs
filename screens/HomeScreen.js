import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";
 import MenuButton from '../components/MenuButton';
import { StyleHTMLAttributes } from 'react';
// import stylesheet from "../styles/style.css";
import { FaHashtag } from "react-icons/fa";
// import Imageimg0110 from "../public/img0110.png";
//  import ImageImg00 from "../public/img00.png";
// import ImageImg01 from '../public/img01.gif';
import Imageimg0s from '../public/corpo.png';
import Image1 from "../public/image_01-6.jpg";
import BookingForm from '../components/BookingForm';

const HomeScreen = () => {
  const scrollTo = (BookingForm) => {
    document.querySelector(`#${BookingForm}`).scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <section
      id="home"className="flex justify-center mt-10 items-center h-screen flex-col-reverse lg:flex-row pt-10">
      <div className="w-full  mt-6 lg:w-1/3 flex items-center justify-center lg:justify-center h-full lg:pl-8 pt-10 lg:pt-0 pb-14">
      <div className="w-full px-4 text-center lg:text-center">
        <span className="font-extrabold text-charade-500 block my-2 text-5xl">
              Book your  Ride
          </span>
          <button onClick={() => {
              document.location.href = 'tel:+441786818284';
            }}
            className="bg-yellow-400 p-2 rounded-lg my-2 inline-block text-charade-500">

            <FaPhoneAlt className="inline -my-1 text-xl" />{' '}
            <span className="font-bold">Call Us</span>
          </button>
          <div className="flex justify-center lg:justify-start items-center my-2">
            <span className="text-red-400 text-xl font-bold">+44</span>

            <a href="tel:+44 1786 818284" className="text-red-500 text-4xl font-extrabold pl-2">
              1786 818284
            </a>
          </div>
          <div className="flex my-5 md:my-5 flex-col md:flex-row justify-right  lg:justify-start">
           
            <button
              onClick={() => {
                scrollTo('BookingForm');}}
              className="md:mr-3 py-3 px-9 font-bold text-xl border-2 border-charade-500 rounded-xl my-2 lg:my-0 hover:bg-charade-300 bg-charade-500 text-black focus:outline-none">
              Book Cab
            </button>
            <a target="_blank" rel="noreferrer"href="https://wa.me/+447809605387" className="p-3 text-charade-500 font-bold text-xl border-2 border-charade-500 rounded-xl my-2 lg:my-0 hover:bg-charade-500 hover:text-Yellow">
            <FaWhatsapp className="inline-block -my-2 mr-1 text-2xl" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="w-8/12 lg:w-1/2 flex justify-center items-center pt-5 lg:pt-0 md:h-full">
        <picture>
          {/* <source srcSet="/img/home.webp" type="image/webp" />
          <source srcSet="/img/home.png" type="image/png" /> */}
          <Image src={Imageimg0s} className="w-90 mt-10 lg:w-5/6" alt="taxi-img"  width={1500}
      height={900}/>
        </picture>
        
      </div>
    </section>
    
  );
};
export default HomeScreen;
<MenuButton />