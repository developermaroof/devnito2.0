import React, { useState } from 'react';
import Banner1 from '../assets/1stbanner.png';
import Banner2 from '../assets/2ndbanner.jpg';
import LeftArrow from '../assets/left-arrow.png';
import RightArrow from '../assets/right-arrow.png';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
  };

  return (
    <div className='relative py-6 overflow-visible'>
      <div className='px-6 font-josefin flex flex-col gap-1'>
        <h1 className='text-lg font-bold'>Transform Your</h1>
        <h1 className='text-lg font-bold'>Business with</h1>
        <h1 className='text-lg font-bold mb-4'>DevNito</h1>
        <div className='line mb-4'></div>
        <p className="text-xs text-light-gray">Your Partner for Digital Solutions</p>
      </div>
      <div className='relative flex p-6 gap-4 transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
        <img src={Banner1} alt="Banner 1" className='w-48 h-auto' />
        <img src={Banner2} alt="Banner 2" className='w-48 h-auto rounded-lg' />
      </div>
      {currentIndex === 0 && (
        <img 
          src={LeftArrow} 
          alt="Left Arrow"
          className='absolute left-52 top-72 transform -translate-y-1/2 w-8 bg-black rounded-3xl cursor-pointer' 
          onClick={handleLeftClick}
        />
      )}
      {currentIndex === 1 && (
        <img 
          src={RightArrow} 
          alt="Right Arrow" 
          className='absolute right-52 top-72 transform -translate-y-1/2 w-8 bg-black rounded-3xl cursor-pointer'
          onClick={handleRightClick}
        />
      )}
    </div>
  );
}

export default Banner;
