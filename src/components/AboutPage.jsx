import React from 'react'
import AboutPage1 from '../assets/AboutPage1.png'
import AboutPage2 from '../assets/AboutPage2.png'

const AboutPage = () => {
  return (
    <div className='AboutPage flex flex-col justify-center items-center text-center px-8 gap-5'>
      <h1>About DevNito</h1>
      <p>DevNito is a leading provider of IT export services, offering custom software and SaaS solutions to businesses worldwide. With a focus on tailored excellence, transparent collaboration, and client-centricity, we aim to elevate your business to new heights.</p>
      <img className='w-auto h-auto object-cover rounded-lg' src={AboutPage1} alt="" />
      <img className='w-auto h-auto object-cover rounded-lg' src={AboutPage2} alt="" />
      <button>Contact us</button>
    </div>
  )
}

export default AboutPage