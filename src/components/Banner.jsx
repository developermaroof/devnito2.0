import React from 'react';
import Banner1 from '../assets/1stbanner.png';
import Banner2 from '../assets/2ndbanner.jpg';

const Banner = () => {
  return (
    <div className='p-6 lg:gap-10 lg:flex lg:justify-center lg:items-center 2xl:max-w-screen-2xl 2xl:mx-auto lg:p-10'>
      <div className='font-josefin flex flex-col gap-1 lg:pr-10'>
        <h1 className='text-lg font-bold sm:text-2xl md:text-3xl lg:w-72 lg:text-4xl text-black dark:text-white'>Transform Your</h1>
        <h1 className='text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl text-black dark:text-white'>Business with</h1>
        <h1 className='text-lg font-bold mb-4 sm:text-2xl md:text-3xl lg:text-4xl text-black dark:text-white'>DevNito</h1>
        <hr className='mb-4 w-32 sm:w-44 lg:w-56 border-black dark:border-white'/>
        <p className="text-xs dark:text-white text-black sm:text-sm md:text-lg lg:text-xl">Your Partner for Digital Solutions</p>
      </div>
      <div className='flex py-6 justify-center gap-4 '>
  <img 
    src={Banner1} 
    alt="Banner 1" 
    className='w-1/2 h-auto object-cover rounded-lg'
  />
  <img 
    src={Banner2} 
    alt="Banner 2" 
    className='w-1/2 h-auto object-cover rounded-lg'
  />
</div>

    </div>
  );
}

export default Banner;