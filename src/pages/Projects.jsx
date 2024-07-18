import React from 'react'
import { Footer, Navbar, ProjectDesktop, Projects } from '../components'

const About = () => {
  return (
    <div className='dark:bg-dark-theme bg-light-theme'>
      <Navbar/>
      <div className='lg:hidden'>
      <Projects />
      </div>
      <div className='hidden lg:block'> 
      <ProjectDesktop/> 
      </div>
      <Footer/>
    </div>
  )
}

export default About