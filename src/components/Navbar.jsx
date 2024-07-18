import React, { useState, useEffect } from 'react';
import '../Styles/navbar.css';
import Logo from '../assets/logoSymbol.png';
import ModeBlack from '../assets/ModeBlack.png';
import UpArrow from '../assets/uparrow.png';
import DownArrow from '../assets/downarrow.png';
import HamburgerOpen from '../assets/Hamburger.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modesOpen, setModesOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModes = () => {
    setModesOpen(!modesOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = (selectedTheme) => {
    console.log("SELECTED THEME ", selectedTheme)
    setTheme(selectedTheme);
  };

  console.log("THEME: ", theme)

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
    <nav className={`Navbar ${isScrolled ? 'bg-light-theme dark:bg-darker-theme' : 'bg-light-theme dark:bg-dark-theme'} z-50 justify-center items-center flex py-4 sticky top-0 transition-colors duration-300`}>
      
      <div className="content flex items-center justify-between w-full px-4 2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className={`logdiv flex gap-1 lg:gap-0 font-bold items-center justify-center ${isScrolled ? 'bg-light-theme dark:bg-darker-theme' : ''} transition-colors duration-300`}>
          <img 
            src={Logo} 
            alt="Company Logo" 
            className={`logo-img sm:w-8 md:w-10 w-4 h-auto lg:w-20 lg:p-4 transition-filter duration-300 dark:invert`} 
          />
          <span className='text-black dark:text-white text-sm sm:text-2xl md:text-3xl lg:text-4xl'>Devnito</span>
        </div>
          
        <div className='justify-center gap-10 items-center flex lg:hidden relative'>
          <div className='relative'>
            <div className='modesdiv flex items-center justify-center gap-1 cursor-pointer' onClick={toggleModes}>
              <img src={ModeBlack} alt="Mode Icon" className="mode-icon w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 dark:invert" />
              <span className='dark:text-white text-black text-xs sm:text-sm md:text-md'>Modes</span>
              <img src={modesOpen ? UpArrow : DownArrow} alt="Dropdown Arrow" className=" w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 dark:invert" />
            </div>
            {modesOpen && (
              <div className='absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg py-2 z-50'>
                <button className='block px-4 py-2 text-black hover:bg-gray-200' onClick={() => handleThemeSwitch('light')}>Light</button>
                <button className='block px-4 py-2 text-black hover:bg-gray-200' onClick={() => handleThemeSwitch('dark')}>Dark</button>
              </div>
            )}
          </div>
          <div className='justify-center items-center'>
            <button onClick={toggleMenu} className='Hamburger'>
              <img src={HamburgerOpen} alt="Menu" className="hamburger-icon w-5 sm:w-7 sm:h-7 md:w-9 md:h-9 mt-1 h-5 text-center justify-center items-center dark:invert" />
            </button>
            {menuOpen && (
              <div className='overlay-container'>
                <div className='overlay'></div>
                <div className='menu'>
                  <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50'>
                    <Link to={"/"} className='block px-4 py-2 text-black text-gray-800 hover:bg-gray-200'>Home</Link>
                    <Link to={"/about"} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>About</Link>
                    <Link to={"/contact"} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Contact</Link>
                    <Link to={"/projects"} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Projects</Link>
                    <Link to={"/services"} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Services</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='hidden lg:flex lg:gap-4 lg:items-center relative'>
          <div className='relative'>
            <div className='modesdiv flex items-center justify-center gap-1 cursor-pointer' onClick={toggleModes}>
              <img src={ModeBlack} alt="Mode Icon" className="mode-icon w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 dark:invert" />
              <span className='dark:text-white text-black text-xs sm:text-sm md:text-md lg:text-lg'>Modes</span>
              <img src={modesOpen ? UpArrow : DownArrow} alt="Dropdown Arrow" className="down-arrow w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 dark:invert" />
            </div>
            {modesOpen && (
              <div className='absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg py-2 z-50'>
                <button className='block px-4 py-2 text-black hover:bg-gray-200' onClick={() => handleThemeSwitch('light')}>Light</button>
                <button className='block px-4 py-2 text-black hover:bg-gray-200' onClick={() => handleThemeSwitch('dark')}>Dark</button>
              </div>
            )}
          </div>
          <Link to="/" className='dark:text-white text-black lg:px-4 lg:py-2 lg:text-lg lg:ml-10 hover:bg-gray-700 rounded transition-colors duration-300 '>Home</Link>
          <Link to="/about" className='dark:text-white text-black lg:px-4 lg:py-2 lg:text-lg hover:bg-gray-700 rounded transition-colors duration-300 '>About</Link>
          <Link to="/contact" className='dark:text-white text-black lg:px-4 lg:py-2 lg:text-lg hover:bg-gray-700 rounded transition-colors duration-300 '>Contact</Link>
          <Link to="/projects" className='dark:text-white text-black lg:px-4 lg:py-2 lg:text-lg hover:bg-gray-700 rounded transition-colors duration-300 '>Projects</Link>
          <Link to="/services" className='dark:text-white text-black lg:px-4 lg:py-2 lg:text-lg hover:bg-gray-700 rounded transition-colors duration-300 '>Services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
