import React from 'react'
import Map from '../assets/Map.png'

const Address = () => {
  return (
    <div   className=' Address bg-darker-theme my-10 font-josefin'>
        <div className=' 2xl:max-w-screen-2xl 2xl:mx-auto p-8 flex flex-col justify-center items-center text-center'>
          <h1 className='mb-2 text-4xl'>Address</h1>
          <p className='text-gray-500 text-lg'>Meydan Hotel, Nad Al-Sheba,</p>
          <p className='text-gray-500 text-lg'>Dubai - UAE</p>
          <a href="https://www.google.com/maps?ll=25.152337,55.30809&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=4935961900776118242">
            <img src={Map} alt="" className='mt-4 w-full h-auto'/>
          </a>
        </div>
    </div>
  )
}

export default Address;
