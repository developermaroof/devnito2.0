import React from 'react'
import ServiceImg from '../assets/Services.png' 

const Services = () => {
  return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto Services bg-darker-theme gap-5 lg:gap-20 py-16 p-6 justify-center flex flex-col text-center items-center lg:flex-row lg:px-10'>
  <div className='lg:order-last lg:flex lg:flex-col lg:gap-4'>
  <p className='text-xs font-thin font-josefin sm:text-sm lg:text-lg lg:text-left lg:font-normal'>
    NOT TO MENTION
  </p>
  <h1 className='font-bold text-xl font-josefin sm:text-2xl md:text-3xl lg:text-4xl lg:text-left'>
    Our Services
  </h1>
  <p className='text-xs font-thin font-josefin sm:text-sm lg:text-lg lg:text-left lg:font-normal'>
    Discover our comprehensive range of IT services designed to transform your business. From custom software development to SaaS solutions, our experienced team delivers excellence tailored to your specific needs. Collaborate with us to unlock the full potential of your business.
  </p>
</div>

  <div className='lg:order-first lg:w-full '>
    <img src={ServiceImg} alt="" />
  </div>
</div>
  )
}

export default Services;
