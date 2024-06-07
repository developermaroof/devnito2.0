import React from 'react'
import '../Styles/navbar.css'
import Logo from '../assets/logo.png'
import ModeBlack from '../assets/ModeBlack.png'
import DownArrow from '../assets/downarrow.png'
import HamburgerOpen from '../assets/HamburgerOpen.png'

const Navbar = () => {
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
        <div>
        <button className='Hamburger'>
          <img src={HamburgerOpen} alt="Menu" className="hamburger-icon w-6 h-auto" />
        </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
