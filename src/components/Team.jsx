import React from 'react'
import teamImg from '../assets/team.png'
import junaid from '../assets/junaid.png'
import vincent from '../assets/vincent.png'
import abdullah from '../assets/abdullah.png'

const Team = () => {

  return (
    <div className='Team flex flex-col items-center text-center 2xl:max-w-screen-2xl 2xl:mx-auto'>
                <div className='bg-dark-theme py-8 px-10 sm:px-20'>
            <img src={teamImg} alt="" />
        </div>

      <div className='bg-darker-theme pb-10 px-10 sm:px-32 md:px-40 flex flex-col gap-28 sm:gap-44 md:gap-52'>
          <h1 className='bg-dark-theme text-md md:text-xl font-josefin px-5 md:px-10 py-6 rounded-b-2xl'>Meet the best team ever</h1>
      <div className='teamMember flex flex-col gap-28 sm:gap-44 md:gap-52 '>
        <div className='member1 bg-dark-theme px-6 pb-6 pt-20 relative '>
        <div className='absolute -top-20 sm:-top-28 left-1/2 transform -translate-x-1/2  rounded-xl p-2 w-44 sm:w-52'>
            <img src={junaid} alt="" />
        </div>
        <div className='sm:px-10'>
          <span className='text-gray-500 text-sm md:text-lg'>JUNAID QURESHI</span>
          <p className='font-bold md:text-xl'>Founder and CEO</p>
          </div></div>
        <div className='member1 bg-dark-theme px-6 pb-6 pt-20 relative '>
        <div className='absolute -top-20 sm:-top-28 left-1/2 transform -translate-x-1/2  rounded-xl p-2 w-44 sm:w-52 '>
            <img src={vincent} alt="" />
        </div>
          <span className='text-gray-500 text-sm md:text-lg'>VINCENT HIGGINS</span>
          <p className='font-bold md:text-xl'>Financial Advisor</p>
        </div>

        <div className='member1 bg-dark-theme px-6 pb-6 pt-20 relative '>
        <div className='absolute -top-20 sm:-top-28 left-1/2 transform -translate-x-1/2  rounded-xl p-2 w-44 sm:w-52 '>
            <img src={abdullah} alt="" />
        </div>
          <span className='text-gray-500 text-sm md:text-lg'>ABDULLAH AL TAYEH</span>
          <p className='font-bold md:text-xl'>Sales Executive</p>
        </div>
</div>
        </div>
    </div>
  )
}

export default Team;
