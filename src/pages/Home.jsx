import React from 'react'
import { Navbar, Banner, Services, WhyChoose, About, Transform, Contact, Footer } from '../components';

const Home = () => {
  return (
    <div className='bg-dark-theme'>
        <Navbar/>
        <Banner />
        <Services />
        <WhyChoose />
        <About />
        <Transform />
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;
