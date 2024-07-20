import React from 'react'
import AboutPage1 from '../assets/AboutPage1.png'
import AboutPage2 from '../assets/AboutPage2.png'

const AboutPage = () => {
  return (
    <div className=' AboutPage flex flex-col justify-center items-center text-center px-8 py-6 sm:px-20 gap-6 font-josefin xl:px-40 2xl:px-52'>
      <div className='2xl:max-w-screen-2xl 2xl:mx-auto flex flex-col gap-6 lg:px-20'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-black dark:text-white'>About DevNito</h1>
        <p className='text-xs sm:text-sm md:text-lg text-black dark:text-white'>DevNito is a leading provider of IT export services, offering custom software and SaaS solutions to businesses worldwide. With a focus on tailored excellence, transparent collaboration, and client-centricity, we aim to elevate your business to new heights.</p>
      </div>
      <div className='flex flex-col gap-6 lg:flex-row lg:order-2 justify-center items-center text-center'>
        <img className='w-1/2 h-auto object-cover rounded-lg' src={AboutPage1} alt="" />
        <img className='w-1/2 h-auto object-cover rounded-lg' src={AboutPage2} alt="" />
      </div>
      <div className='lg:order-1'>
        <button className='bg-darker-theme font-semibold text-light-text text-xs sm:text-sm md:text-lg py-4 px-8 rounded-3xl'>Contact us</button>
      </div>
    </div>
  )
}

export default AboutPage;
