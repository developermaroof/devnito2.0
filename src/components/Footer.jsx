import React from 'react'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Email from '../assets/Email.png'

const Footer = () => {
  return (
    <div className='flex flex-col bg-darker-theme py-4 justify-center items-center text-center gap-3'>
      <h1 className='font-josefin text-md'>DevNito</h1>
      <div className='socials flex gap-3'>
        <img className='w-4 h-4' src={Facebook} alt="" />
        <img className='w-4 h-4' src={Linkedin} alt="" />
        <img className='w-4 h-4' src={Email} alt="" />
      </div>
    </div>
  )
}

export default Footer;
