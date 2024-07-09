import React from 'react'
import { Footer, Navbar, ContactDevnito, ContactDevnitoLg, Address } from '../components'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <div className='lg:hidden'>
      <ContactDevnito/></div>
      <div className='hidden lg:block'> <ContactDevnitoLg/></div>
      <Address/>
      <Footer/>
    </div>
  )
}

export default About