import React from 'react'
import { Footer, Navbar, ServicesPage, ServicesDesktop } from '../components'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <div className='lg:hidden'>
      <ServicesPage/>
      </div>
      <div className='hidden lg:block'> 
      <ServicesDesktop/>
      </div>
      <Footer/>
    </div>
  )
}

export default About