import React from 'react';
import bannerBg from "../assets/bannerBg.jpeg";

const Banner = () => {
  return (
    <div className="2xl:max-w-screen-2xl 2xl:mx-auto">
    {/* First Section */}
      <div className="relative">
      <div 
          className="p-8 w-full h-66" 
          style={{ 
            backgroundImage: `url(${bannerBg})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex justify-center items-center">
            <div className="bg-black bg-opacity-80 rounded-md w-64 h-full p-6 flex flex-col gap-2">
              <p className='text-gray-300 font-josefin text-sm'>Welcome!</p>
              <h1 className='font-josefin font-bold text-lg'>Trasform Your Business with <span className='text-blueText'>DevNito</span></h1>
              <p className='text-gray-300 font-josefin text-xs'>Discover how DevNito can revolutionize your business through our exceptional IT export services</p>
              <hr className='w-32 border-white'/>
              <p className='text-gray-300 font-josefin text-xs'>Your Partner for Digital Solutions</p>
              <button className='bg-white text-xs text-blueText py-2 rounded-2xl w-28 mt-2'>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    {/* Second Section */}
    </div>
  );
}

export default Banner;
