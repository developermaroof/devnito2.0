import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'

const ProjectDesktop = () => {
    return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto flex flex-col gap-20 font-josefin'>
        <div className='p-10  flex flex-col gap-4'>
            <h1 className='font-bold text-center text-3xl xl:text-4xl'>Our Projects</h1>
        <div className='flex justify-center items-center gap-10'>
            <div className='flex flex-col gap-8'>
            <h2 className='text-2xl xl:text-3xl'>
            MenaJobs.io
            </h2>
            <p className='text-lg xl:text-2xl font-thin'>
            We led MenaJobs.io's development, shaping it into a user-friendly job portal. My work spanned planning, design, coding, and optimization—the result: a trusted platform connecting job seekers and employers in the MENA region. Mobile-friendly, secure, and performance-driven, it's now a go-to resource for career growth.
            </p>
            </div>
            <img src={Project1} alt="" className='w-1/2 h-auto'/>
        </div>
        </div>
        
        <div className='p-10 bg-darker-theme flex flex-col gap-4'>
        <div className='flex justify-center items-center gap-10'>
            <div className='flex flex-col gap-8 '>
            <h2 className='text-2xl xl:text-3xl'>
            APK-Hub
            </h2>
            <p className='text-lg xl:text-2xl font-thin'>
            As the developer of APK-Hub, I crafted a user-friendly platform for discovering and exploring apps and games from the Play Store. My work spans design, search enhancements, mobile responsiveness, and security measures. APK-Hub is now a trusted resource, attracting a growing user base and delivering a top-tier user experience. </p>
            </div>
            <img src={Project2} alt="" className='w-1/2 h-auto order-first'/>
        </div>
        </div>
        <div className='p-10 flex flex-col gap-4'>
        <div className='flex justify-center items-center gap-10'>
            <div className='flex flex-col gap-8'>
            <h2 className='text-2xl xl:text-3xl'>
            Blend (Report Management System)
            </h2>
            <p className='text-lg xl:text-2xl font-thin'>
            As our Report Management System developer, I've created a user-friendly platform for generating and customizing reports. My work spans design, data integration, security, and feedback mechanisms, resulting in an efficient tool for data-driven decision-making, enhancing productivity, and improving user experience.</p>
            </div>
            <img src={Project3} alt="" className='w-1/2 h-auto'/>
        </div>
        </div>
    </div>
  )
}

export default ProjectDesktop