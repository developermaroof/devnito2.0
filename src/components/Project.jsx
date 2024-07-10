import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'

const Project = () => {
  return (
    <div className='flex flex-col gap-20 font-josefin'>
        <div className='p-10 sm:p-20 flex flex-col gap-4'> 
            <h1 className='font-bold sm:text-xl md:text-2xl'>Our Projects</h1>
            <h2 className='text-sm sm:text-lg md:text-xl'>
            MenaJobs.io
            </h2>
            <p className='text-xs sm:text-sm md:text-lg font-thin'>
            We led MenaJobs.io's development, shaping it into a user-friendly job portal. My work spanned planning, design, coding, and optimization—the result: a trusted platform connecting job seekers and employers in the MENA region. Mobile-friendly, secure, and performance-driven, it's now a go-to resource for career growth.
            </p>
            <img src={Project1} alt="" />
        </div>
        
        <div className='p-10 sm:p-20 bg-darker-theme flex flex-col gap-4'>
        <h2 className='text-sm sm:text-lg md:text-xl'>
        APK-Hub
            </h2>
            <p className='text-xs sm:text-sm md:text-lg font-thin'>
            As the developer of APK-Hub, I crafted a user-friendly platform for discovering and exploring apps and games from the Play Store. My work spans design, search enhancements, mobile responsiveness, and security measures. APK-Hub is now a trusted resource, attracting a growing user base and delivering a top-tier user experience.
            </p>
            <img src={Project2} alt="" />
        </div>
        <div className='p-10 sm:p-20 flex flex-col gap-4'>
        <h2 className='text-sm sm:text-lg md:text-xl'>
        Blend (Report Management System)
            </h2>
            <p className='text-xs sm:text-sm md:text-lg font-thin'>
            As our Report Management System developer, I've created a user-friendly platform for generating and customizing reports. My work spans design, data integration, security, and feedback mechanisms, resulting in an efficient tool for data-driven decision-making, enhancing productivity, and improving user experience.
            </p>
            <img src={Project3} alt="" />
        </div>
    </div>
  )
}

export default Project