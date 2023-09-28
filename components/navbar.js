import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const facebookUrl = 'https://www.facebook.com/skycabsstirling';
const whatsappNumber = '+447809605387';
const whatsappMessage = 'Hello, What can I help you .'; // Replace with your default message
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;



const navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto lg:flex lg:flex-row lg:justify-between justify-center items-center space-y-2 text-gray-500 py-3 w-full">
          <div className="lg:flex lg:flex-row flex flex-col justify-center items-center space-x-12 lg:space-y-0 space-y-2">
            <div className="flex flex-row space-x-2">
              <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />
              <p>97 Randolph Crescent Stirling FK70LY</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaMobileAlt className="w-5 h-5 text-gray-500" />
              <p>(+44) 7809 605387</p>
            </div>
            <div className="flex flex-row space-x-2">
              <FaRegClock className="w-5 h-5 text-gray-500" />
              <p>Mon-Sat: 07:00 - 17:00</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-center items-center">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-gray-500" />
            </a>
            <FaInstagram className="w-6 h-6 text-gray-500" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-6 h-6 text-gray-500" />
            </a>
          </div>
        </div>
      </div>
      <nav className="px-2 sm:px-4 py-5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a href="#" className="flex">
              <Image src={Logo} alt="Logo" />
            </a>
          </Link>
          <div className="flex md:order-2">
            <>
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-700 hover:text-white hover:bg-yellow-600 border-2 border-yellow-500 rounded-3xl px-5 py-2.5 text-center mr-3 md:mr-0 md:hidden"
              >
                {isMobileMenuOpen ? 'Close' : 'Menu'}
              </button>
            </>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link href="/">
                  <a
                    className="block py-2 pr-4 pl-3 text-yellow-600 md:hover:text-yellow-500 md:p-0"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/aboutus">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-500 md:hover:text-yellow-500 md:p-0"
                    href="#"
                  >
                    ABOUT
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-500 md:hover:text-yellow-500 md:p-0"
                    href="#"
                  >
                    SERVICES
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-500 md:hover:text-yellow-500 md:p-0"
                    href="#"
                  >
                    CONTACT US
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
