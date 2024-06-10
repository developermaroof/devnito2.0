import React from 'react'
import ServiceImg from '../assets/Services.png' 

const Services = () => {
  return (
    <div className='Services bg-darker-theme gap-4 py-16 p-6 justify-center flex flex-col text-center items-center'>
      <p className='text-xs font-thin font-josefin'>NOT TO MENTION
      </p>
      <h1 className='font-bold text-2xl'>Our Services</h1>
      <p className='text-xs font-thin font-josefin'>Discover our comprehensive range of IT services designed to transform your business. From custom software development to SaaS solutions, our experienced team delivers excellence tailored to your specific needs. Collaborate with us to unlock the full potential of your business.</p>
      <img src={ServiceImg} alt="" />
    </div>
  )
}

export default Services