import React from 'react'
import '../Styles/banner.css'

const Banner = () => {
  return (
    <div className='Banner py-6'>
      <div className='bannerText  px-6 font-josefin flex flex-col gap-1'>
        <h1 className='text-lg font-bold'>Transform Your</h1>
        <h1 className='text-lg font-bold'>Business with</h1>
        <h1 className='text-lg font-bold mb-4'>DevNito</h1>
        <div className='line mb-4'></div>
        <p class="text-xs text-light-gray">Your Partner for Digital Solutions</p>

      </div>
      <div className='bannerImages'></div>
    </div>
  )
}

export default Banner