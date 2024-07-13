import React from 'react'
import WhyChooseWe from '../assets/WhyChoose.png' 

const WhyChoose = () => {
  return (
    <div className=' bg-darker-theme'>
    <div className='lg:gap-20 2xl:max-w-screen-2xl 2xl:mx-auto WhyChoose gap-5 py-16 p-6 justify-center flex flex-col text-center items-center lg:flex-row lg:px-10'>
     <div className='lg:flex lg:flex-col lg:gap-4 '>
       <p className='text-xs font-thin font-josefin sm:text-sm lg:text-lg lg:text-left lg:font-normal lg:text-gray-300'>AND LET'S NOT FORGET
      </p>
      <h1 className='font-bold text-xl font-josefin sm:text-2xl md:text-3xl lg:text-4xl lg:text-left'>Why Choose DevNito</h1>
      <p className='text-xs font-thin font-josefin sm:text-sm lg:text-lg lg:text-left lg:font-normal lg:text-gray-300'>At DevNito, we prioritize transparent collaboration and client-centricity to ensure your success. With our exceptional IT export services, freelancing connections, and software sales, we revolutionize businesses by providing innovative solutions. Connect with us today and elevate your business to new heights.</p>
    </div> 
    <div className='lg:w-full'>
      <img src={WhyChooseWe} alt="" />
    </div>
    </div></div>
  )
}

export default WhyChoose