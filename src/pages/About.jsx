import React from 'react';
import { AboutPage, Principles, TeamDesktop, Contact, Footer, Navbar, Team } from '../components';

const About = () => {
  return (
    <div className='bg-dark-theme'>
      <Navbar />
      <AboutPage />
      <Principles />
      {/* Hide Team on large screens and above, show on smaller screens */}
      <div className='lg:hidden'>
        <Team />
      </div>
      {/* Show TeamDesktop on large screens and above, hide on smaller screens */}
      <div className='hidden lg:block'>
        <TeamDesktop />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
