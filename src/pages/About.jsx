import React from 'react'
import { AboutPage, Contact, Footer, Navbar } from '../components'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <AboutPage/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About