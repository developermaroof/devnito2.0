import React from 'react'
import WhyChooseWe from '../assets/WhyChoose.png' 

const WhyChoose = () => {
  return (
    <div className='WhyChoose bg-darker-theme gap-5 py-16 p-6 justify-center flex flex-col text-center items-center'>
      <p className='text-xs font-thin font-josefin'>AND LET'S NOT FORGET
      </p>
      <h1 className='font-bold text-xl font-josefin'>Why Choose DevNito</h1>
      <p className='text-xs font-thin font-josefin'>At DevNito, we prioritize transparent collaboration and client-centricity to ensure your success. With our exceptional IT export services, freelancing connections, and software sales, we revolutionize businesses by providing innovative solutions. Connect with us today and elevate your business to new heights.</p>
      <img src={WhyChooseWe} alt="" />
    </div>
  )
}

export default WhyChoose