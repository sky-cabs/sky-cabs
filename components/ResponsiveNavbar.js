// components/ResponsiveMenu.js

import React, { useState } from 'react';
import Link from 'next/link';

const ResponsiveMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden flex">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-white hover:bg-yellow-600 border-2 border-yellow-500 rounded-3xl px-5 py-2.5 text-center mr-3 md:mr-0 focus:outline-none"
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      {isMenuOpen && (
        <div className="bg-gray-100 w-48 mt-2 absolute right-0">
          <ul className="p-4 space-y-2">
            <li>
              <Link href="/">
                <a className="text-gray-500 hover:text-yellow-500">HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a className="text-gray-500 hover:text-yellow-500">ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="text-gray-500 hover:text-yellow-500">SERVICES</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-gray-500 hover:text-yellow-500">CONTACT US</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
