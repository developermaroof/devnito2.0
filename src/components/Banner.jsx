import React from 'react';
import Banner1 from '../assets/1stbanner.png';
import Banner2 from '../assets/2ndbanner.jpg';

const Banner = () => {
  return (
    <div className='p-6'>
      <div className='font-josefin flex flex-col gap-1'>
        <h1 className='text-lg font-bold'>Transform Your</h1>
        <h1 className='text-lg font-bold'>Business with</h1>
        <h1 className='text-lg font-bold mb-4'>DevNito</h1>
        <div className='line mb-4'></div>
        <p className="text-xs text-light-gray">Your Partner for Digital Solutions</p>
      </div>
      <div className='flex py-6 justify-center gap-4'>
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
