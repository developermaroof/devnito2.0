import React from 'react'
import { AboutPage, Contact, Footer, Navbar, Team } from '../components'
import Principles from '../components/Principles'

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar/>
      <AboutPage/>
      <Principles/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About