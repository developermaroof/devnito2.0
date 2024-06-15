import React from 'react'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Email from '../assets/Email.png'

const Footer = () => {
  return (
    <div className='flex flex-col bg-darker-theme py-4 justify-center items-center text-center gap-3 sm:gap-2'>
      <h1 className='font-josefin text-md sm:text-lg md:text-xl'>DevNito</h1>
      <div className='socials flex gap-3'>
        <a href=""> <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7' src={Facebook} alt="" /></a>
        <a href=""> <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7' src={Linkedin} alt="" /></a>
        <a href=""> <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7' src={Email} alt=""    /></a>
      </div>
    </div>
  )
}

export default Footer;
