import React from 'react';

const Principles = () => {
  return (
    <div className=' bg-light-theme-silver dark:bg-darker-theme '>
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto Principles font-josefin p-8 flex flex-col justify-center items-center font-bold text-lg gap-8 sm:px-20 '>
      <h1 className='sm:text-xl md:text-2xl text-black dark:text-white'>Our Principles</h1>
      <div className='PrincipleBoxes flex flex-col gap-10 lg:flex-row'>
        <div className="PrincipleBox dark:bg-dark-theme bg-light-theme-black  p-6 gap-4 flex flex-col relative">
          <div className='dark:bg-dark-theme bg-light-theme-black absolute -top-3 left-1/2 transform -translate-x-1/2 border-darker-theme border-4 rounded-xl p-2'>
            
          </div>
          <h2 className='text-sm md:text-lg'>Tailored Excellence</h2>
          <p className='font-thin text-sm md:text-lg'>We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
        </div>
        <div className="PrincipleBox dark:bg-dark-theme bg-light-theme-black  p-6 gap-4 flex flex-col relative">
          <div className='dark:bg-dark-theme bg-light-theme-black absolute -top-3 left-1/2 transform -translate-x-1/2 border-darker-theme border-4 rounded-xl p-2'>
            
          </div>
          <h2 className='text-sm md:text-lg'>Transparent Collaboration</h2>
          <p className='font-thin text-sm md:text-lg'>We believe in open and transparent communication with our clients. We work closely with you to understand your requirements, provide regular updates, and ensure that you are involved in every step of the process.</p>
        </div>
        <div className="PrincipleBox dark:bg-dark-theme bg-light-theme-black  p-6 gap-4 flex flex-col relative">
          <div className='dark:bg-dark-theme bg-light-theme-black absolute -top-3 left-1/2 transform -translate-x-1/2 border-darker-theme border-4 rounded-xl p-2'>
            
          </div>
          <h2 className='text-sm md:text-lg'>Client-Centricity</h2>
          <p className='font-thin text-sm md:text-lg'>Our focus is always on our clients. We strive to understand your goals, challenges, and vision for your business. By putting your needs first, we ensure that our solutions are aligned with your objectives.</p>
        </div>
      </div>
    </div></div>
  );
};

export default Principles;
