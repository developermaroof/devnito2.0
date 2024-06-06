import React from 'react'
import '../Styles/navbar.css'
import Logo from '../assets/logo.png'
import ModeBlack from '../assets/ModeBlack.png'
import DownArrow from '../assets/downarrow.png'
import HamburgerOpen from '../assets/HamburgerOpen.png'

const Navbar = () => {
  return (
    <div className='Navbar bg-dark-theme flex'>
    <div className="content">
    <div className='logdiv'><img src={Logo} alt="" /></div>
    <div className='modesdiv'><img src={ModeBlack} alt="" /> <span>Modes</span> <img src={DownArrow} alt="" /></div>
  <div className='Hamburger'><img src={HamburgerOpen} alt="" /></div>
  </div>
    </div>
  )
}

export default Navbar