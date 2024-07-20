import React from 'react'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Email from '../assets/Email.png'

const Footer = () => {
  return (

    <div className='dark:bg-darker-theme bg-light-theme-black'>
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto flex flex-col py-4 justify-center items-center text-center gap-3 sm:gap-2'>
      <h1 className='font-josefin text-md sm:text-lg md:text-xl'>DevNito</h1>
      <div className='socials flex gap-3'>
        <a href=""> <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7' src={Facebook} alt="" /></a>
        <a href=""> <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7' src={Linkedin} alt="" /></a>
        <a href=""> <img className='w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7' src={Email} alt=""    /></a>
      </div>
    </div>
    </div>
  
)
}

export default Footer;
