import React, { useState, useEffect } from 'react';
import '../Styles/navbar.css';
import Logo from '../assets/logo.png';
import ModeBlack from '../assets/ModeBlack.png';
import DownArrow from '../assets/downarrow.png';
import HamburgerOpen from '../assets/HamburgerOpen.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`Navbar ${isScrolled ? 'bg-darker-theme' : 'bg-dark-theme'} z-50 justify-center items-center flex py-4 sticky top-0 transition-colors duration-300`}>
      <div className="content flex items-center justify-between w-full px-4">
        <div className={`logdiv items-center justify-center ${isScrolled ? 'bg-darker-theme' : ''} transition-colors duration-300`}>
          <img 
            src={Logo} 
            alt="Company Logo" 
            className={`logo-img sm:w-32 md:w-36 w-24 h-auto ${isScrolled ? 'filter brightness-75' : ''} transition-filter duration-300`} 
          />
        </div>
        <div className='justify-center gap-10 items-center flex'>
          <div className='modesdiv flex items-center justify-center gap-1'>
            <img src={ModeBlack} alt="Mode Icon" className="mode-icon w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
            <span className='text-white text-xs sm:text-sm md:text-md'>Modes</span>
            <img src={DownArrow} alt="Dropdown Arrow" className="down-arrow w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          </div>
          <div className='justify-center items-center'>
            <button onClick={toggleMenu} className='Hamburger'>
              <img src={HamburgerOpen} alt="Menu" className="hamburger-icon w-5 sm:w-7 sm:h-7 md:w-9 md:h-9 mt-1 h-5 text-center justify-center items-center" />
            </button>
            {menuOpen && (
              <div className='overlay-container'>
                <div className='overlay'></div>
                <div className='menu'>
                  <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50'>
                    <a href="#home" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Home</a>
                    <a href="#about" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>About</a>
                    <a href="#contact" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Contact</a>
                    <a href="#projects" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Projects</a>
                    <a href="#services" className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Services</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
