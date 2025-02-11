import React from 'react'
import { Navbar, Banner, Services, WhyChoose, About, Transform, Contact, Footer } from '../components';

const Home = () => {
  return (
    <div className='dark:bg-dark-theme bg-light-theme  '>
        <Navbar/>
        <Banner />
        <Services />
        <div className='my-10'></div>
        <WhyChoose />
        <About />
        <Transform />
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;