import React from 'react'
import { Footer, Navbar } from '../components'
import ContactDevnito from '../components/ContactDevnito'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <ContactDevnito/>
      <Footer/>
    </div>
  )
}

export default About