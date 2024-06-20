import React from 'react'
import { AboutPage, Contact, Footer, Navbar } from '../components'
import Principles from '../components/Principles'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <AboutPage/>
      <Principles/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About