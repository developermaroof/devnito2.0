import React from 'react'
import teamImg from '../assets/team.png'
import junaid from '../assets/junaid.png'
import vincent from '../assets/vincent.png'
import abdullah from '../assets/abdullah.png'

const TeamDesktop = () => {

  return (
    <div className='Team flex flex-col items-center text-center 2xl:max-w-screen-2xl 2xl:mx-auto'>
      <div className='bg-dark-theme py-8 px-10'>
        <img src={teamImg} alt="" />
      </div>
        {/*  */}
      <div className='bg-darker-theme pb-10 px-10  flex flex-col gap-32 w-full justify-center items-center'>
        <h1 className='bg-dark-theme text-2xl font-bold font-josefin w-80 py-6 rounded-b-2xl'>Meet the best team ever</h1>
        <div className='teamMember flex flex-row gap-20'>
        {/*  */}
          <div className='member1 bg-dark-theme px-10 pb-6 pt-20  relative '>
            <div className='absolute -top-20  left-1/2 transform -translate-x-1/2  rounded-xl p-2 w-44'>
              <img src={junaid} alt="" />
            </div>
          
            <span className='text-gray-500 text-sm '>JUNAID QURESHI</span>
            <p className='font-bold '>Founder and CEO</p>
          
          </div>
{/*  */}
        <div className='member1 bg-dark-theme px-10 pb-6 pt-20  relative '>
        <div className='absolute -top-20  left-1/2 transform -translate-x-1/2  rounded-xl p-2 w-44 '>
            <img src={vincent} alt="" />
        </div>
          <span className='text-gray-500 text-sm'>VINCENT HIGGINS</span>
          <p className='font-bold'>Financial Advisor</p>
        </div>
{/*  */}
        <div className='member1 bg-dark-theme px-10 pb-6 pt-20  relative '>
        <div className='absolute -top-20  left-1/2 transform -translate-x-1/2  rounded-xl p-2 w-44 '>
            <img src={abdullah} alt="" />
        </div>
          <span className='text-gray-500 text-sm '>ABDULLAH AL TAYEH</span>
          <p className='font-bold '>Sales Executive</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default TeamDesktop;
