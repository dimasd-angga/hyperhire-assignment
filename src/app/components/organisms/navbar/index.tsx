'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import NavLinks from '@/app/components/molecules/nav-links';
import { navLinks } from '@/configs/navigation-link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full p-4 z-20">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center">
        <Image
          src="/images/logo-horizontal.png"
          alt="Logo"
          width={150}
          height={40}
          className="w-auto h-auto" // Ensure both width and height are auto in CSS
        />
        </div>

        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <NavLinks links={navLinks} />
        </div>

        <div className="hidden md:block">
          <button className="bg-white font-bold text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            문의하기
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full z-10">
          <div className="container max-w-7xl mx-auto p-4">
            <NavLinks links={navLinks} />
            <div className="mt-4">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition">
                문의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
