import React from 'react'
import { Footer, Navbar, ContactDevnito, ContactDevnitoLg, Address } from '../components'

const About = () => {
  return (
    <div className='dark:bg-dark-theme bg-light-theme'>
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