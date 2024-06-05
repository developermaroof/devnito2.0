import React from 'react'
import { Navbar, Banner, Services, WhyChoose, About, Transform, Contact, Footer } from '../components';

const Home = () => {
  return (
    <div>
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