import React, { useState } from 'react';
import '../Styles/navbar.css';
import Logo from '../assets/logo.png';
import ModeBlack from '../assets/ModeBlack.png';
import DownArrow from '../assets/downarrow.png';
import HamburgerOpen from '../assets/HamburgerOpen.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='Navbar bg-dark-theme flex justify-center items-center py-6'>
      <div className="content flex items-center justify-between w-full px-4">
        <div className='logdiv'>
          <img src={Logo} alt="Company Logo" className="logo-img w-24 h-auto" />
        </div>
        <div className='modesdiv flex items-center justify-center gap-1 ml-10'>
          <img src={ModeBlack} alt="Mode Icon" className="mode-icon w-3 h-auto" />
          <span className='text-white text-xs'>Modes</span>
          <img src={DownArrow} alt="Dropdown Arrow" className="down-arrow w-2 h-auto" />
        </div>
        <div className='relative'>
          <button onClick={toggleMenu} className='Hamburger'>
            <img src={HamburgerOpen} alt="Menu" className="hamburger-icon w-6 h-auto" />
          </button>
          {menuOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2'>
              <a href="#home" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Home</a>
              <a href="#about" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>About</a>
              <a href="#contact" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Contact</a>
              <a href="#projects" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Projects</a>
              <a href="#services" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Services</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
