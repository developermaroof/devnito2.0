import React from 'react'
import SaaS from '../assets/SaaS.png'
import Web from '../assets/Web.png'
import Freelancing from '../assets/Freelancing.png'
import MobileApp from '../assets/MobileApp.png'

const ServicesDesktop = () => {
    return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto gap-4 flex flex-col gap-14 font-josefin p-10 '>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-4xl dark:text-white text-black'>Our Services</h1>
            <p className='font-thin text-2xl pr-96 dark:text-white text-black'>From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive.
            </p>
        </div>
        <div className='flex flex-col gap-14'>
        <div className="flex">
           {/* First Section */}
           {/* first service */}
        <div className="w-1/2 flex flex-col">
        <div className="w-4/5">
            <img src={SaaS} alt="" className="w-full" />
            <p className="w-full dark:bg-darker-theme bg-light-theme-black h-20 text-center text-2xl font-bold py-6">SaaS Development</p>
        </div>
        <div className="w-4/5 p-2">
            <p className='flex text-center text-xl  dark:text-white text-black'>Innovative Software as a Service (SaaS) solutions designed for scalability, accessibility, and security, enabling wider market reach.</p>
        </div>
        </div>
            {/* second service*/}
    <div className="w-1/2 flex flex-col">
        <div className="w-4/5">
            <img src={Web} alt="" className="w-full" />
            <p className="w-full dark:bg-darker-theme bg-light-theme-black h-20 text-center text-2xl font-bold py-6">Web Development</p>
        </div>
        <div className="w-4/5 p-2">
            <p className='flex text-center text-xl  dark:text-white text-black'>Creating visually appealing and functional websites enhances user experience and online presence.

            </p>
        </div>
    </div>
</div>

    <div className="flex">
           {/* Secound Section */}
           {/* first service */}
        <div className="w-1/2 flex flex-col">
        <div className="w-4/5">
            <img src={Freelancing} alt="" className="w-full" />
            <p className="w-full dark:bg-darker-theme bg-light-theme-black h-20 text-center text-2xl font-bold py-6">Freelancing Services</p>
        </div>
        <div className="w-4/5 p-2">
            <p className='flex text-center text-xl  dark:text-white text-black'>Access to a network of skilled freelancers for project-specific requirements, from coding to design.</p>
        </div>
        </div>
            {/* second service*/}
    <div className="w-1/2 flex flex-col">
        <div className="w-4/5">
            <img src={MobileApp} alt="" className="w-full" />
            <p className="w-full dark:bg-darker-theme bg-light-theme-black h-20 text-center text-2xl font-bold py-6">Mobile App Development</p>
        </div>
        <div className="w-4/5 p-2">
            <p className='flex text-center text-xl  dark:text-white text-black'>Development of intuitive and cross-platform mobile applications catering to the on-the-go consumer.</p>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ServicesDesktop