import React from 'react'
import { Footer, Navbar, ContactDevnito, Address } from '../components'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <ContactDevnito/>
      <Address/>
      <Footer/>
    </div>
  )
}

export default About