"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../../../public/img/logo-img.svg";
import whatsapp from "../../../public/img/whatsap.svg";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
        setIsScrolling(true);
      } else {
        setIsSticky(false);
        setIsScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${isSticky ? 'fixed top-0 left-0 w-full z-[1000] bg-black shadow-md' : ''} ${isScrolling ? 'text-black' : 'text-orange-600'} border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex-shrink-0">
              <Image
                className="w-[60%] md:w-[80%] lg:w-[100%]"
                src={Logo}
                alt="Logo"
                width={32}
                height={32}
              />
            </div>
            <div className="sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="flex items-center space-x-8">
              <a href="#" className={`${isScrolling ? 'text-orange-600' : 'text-gray-300'} hover:text-orange-500 hover:border-b-2 hover:border-orange-500 px-1 py-2 text-sm md:text-lg xl:text-base font-normal`}>
                HOME
              </a>
              <a href="#" className={`${isScrolling ? 'text-orange-600' : 'text-gray-300'} hover:text-orange-500 hover:border-b-2 hover:border-orange-500 px-1 py-2 text-sm md:text-lg xl:text-base font-normal`}>
                SERVICES
              </a>
              <a href="#" className={`${isScrolling ? 'text-orange-600' : 'text-gray-300'} hover:text-orange-500 hover:border-b-2 hover:border-orange-500 px-1 py-2 text-sm md:text-lg xl:text-base font-normal`}>
                CONTACT US
              </a>
              <Link href="https://wa.me/message/SPYDZQEVY2DVC1">
                <Image src={whatsapp} alt="whatsapp-img" className="w-[90%]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
       <div className="sm:hidden absolute top-16 left-0 w-full z-[999] bg-gray-700 shadow-2xl">
          <div className="px-4 pt-2 pb-3 space-y-0 bg-gray-700 shadow-2xl">
            <a href="#" className={`${isScrolling ? 'text-orange-600' : 'text-gray-300'} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xs font-normal`}>
              HOME
            </a>
            <a href="#" className={`${isScrolling ? 'text-orange-600' : 'text-gray-300'} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xs font-normal`}>
              SERVICES
            </a>
            <a href="#" className={`${isScrolling ? 'text-orange-600' : 'text-gray-300'} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xs font-normal`}>
              CONTACT
            </a>
            <Link href="https://wa.me/message/SPYDZQEVY2DVC1" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md text-xs font-normal px-3 py-2">
              <Image src={whatsapp} alt="whatsapp-img" className="w-[10%]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
