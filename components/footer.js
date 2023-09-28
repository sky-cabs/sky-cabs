import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  // FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/logo.png";


const facebookUrl = 'https://www.facebook.com/skycabsstirling';
const whatsappNumber = '+447809605387';
const whatsappMessage = 'Hello, What can I help you .'; // Replace with your default message
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  const scrollTo = (section) => {
    document.querySelector(`#${section}`).scrollIntoView({
      behavior: 'smooth',
    });
  };

const footer = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-16">
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">ADDRESS</p>
                <p className="text-gray-600 font-medium">
                97 Randolph Crescent Stirling FK70LY
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">PHONES</p>
                <p className="text-gray-600 font-medium">
                  BOOK A RIDE: (+44) 7809605387 OFFICE: (+44) 1786818284
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-amber-800  p-1" />
              <div className="space-y-5">
                <p className="text-gray-800">WORKING HOURS</p>
                <p className="text-gray-800 font-medium">
                  MON-SAT: 07:00 - 17:00 SUN: CLOSED
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-20 ">
            <div className="col-span-3 space-y-15"> 
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-800 justify-content: center">
              Looking for a safe and reliable taxi in Stirling? 
              Affordable and reliable Taxi in  Stirling ! 
              We offer comfortable 24/7 service,
              will get you where you need to go on time.
               Our taxis are all equipped with modern safety features. </p>
            </div>
            <div className="col-span-1 space-y-1">
              <div className="flex flex-col space-y-1">

                <p className="text-gray-600 font-medium">OUR SERVICES</p>
                <p className="border-solid border border-amber-800  w-1/2 "> </p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-right space-x-15">
                  <FaAngleRight className="w-8 h-8 text-gray-800  p-1" />
                  <p className="text-gray-500">Experiential Tours</p>
                </div>
                <div className="flex flex-row items-center space-x-1">
                  <FaAngleRight className="w-8 h-8 text-gray-800  p-1" />
                  <p className="text-gray-500">Wedding Limousine</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-800  p-1" />
                  <p className="text-gray-500">Corporate Travel</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-800  p-1" />
                  <p className="text-gray-500">Airport Transportation</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-800  p-1" />
                  <p className="text-gray-500"> Local or Long Distance </p>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium"> SKY CABS </p>
                <p className="border-solid border border-amber-800  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-gray-800  font-light" />
                  <p className="text-gray-800">
                    97 Randolph Crescent Stirling FK7 0LY
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-800 " />
                  <p className="text-gray-500">(+44) 1786 818284 </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhoneSquareAlt className="w-6 h-6 text-gray-800 " />
                  <p className="text-gray-500">(+44) 7809605387 </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-800 " />
                  <p className="text-gray-500"> info@sky-cabs.com</p>
                </div> */}
                {/* <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-800 " />
                  <p className="text-gray-800">Mon-Sat: 07:00 - 17:00</p>
                </div> */}
              {/* </div>
            </div> */}
            {/* <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button> */}
              {/* </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="py-8 container mx-auto flex flex-row justify-between">
        <p> Copyright 2023 smilepk </p>
        <div className="flex flex-row space-x-3">
        <a href = {facebookUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-5 h-5 text-gray-500" /></a>
          <FaInstagram className="w-5 h-5 text-gray-500" />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-5 h-5 text-gray-500" /></a>
        </div>
      </div>
    </div>
  );
};
export default footer;
