import React from 'react'
import SaaS from '../assets/SaaS.png'
import Web from '../assets/Web.png'
import Freelancing from '../assets/Freelancing.png'
import MobileApp from '../assets/MobileApp.png'

const ServicesPage = () => {
  return (
    <div className='gap-4 flex flex-col justify-center items-center text-center font-josefin p-10 sm:px-32 '>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Our Services</h1>
            <p className='font-thin text-xs sm:text-lg md:text-xl'>From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive.
            </p>
        </div>
        <div className='flex flex-col gap-8'>
            {/*  */}
            <div className='flex flex-col gap-4'>
                <div className='w-full '>
                    <div className='w-full'>
                        <img src={SaaS} alt="" className='w-full h-full'/>
                    </div>
                    <div className='bg-darker-theme py-2 sm:text-lg md:text-xl md:py-4 w-50'>SaaS Development</div>
                </div>
                <p className='text-xs sm:text-lg text-xs sm:text-lg md:text-xl'>Innovative Software as a Service (SaaS) solutions designed for scalability, accessibility, and security, enabling wider market reach.
                </p>
            </div>
            {/*  */}
            <div className='flex flex-col gap-4'>
                <div className='w-100 '>
                    <div>
                        <img src={Web} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='bg-darker-theme py-2 sm:text-lg md:text-xl md:py-4 w-50'>Web Development</div>
                </div>
                <p className='text-xs sm:text-lg text-xs sm:text-lg md:text-xl'>Creating visually appealing and functional websites enhances user experience and online presence.</p>
            </div>
            {/*  */}
            <div className='flex flex-col gap-4'>
                <div className='w-100'>
                    <div>
                        <img src={Freelancing} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='bg-darker-theme py-2 sm:text-lg md:text-xl md:py-4 w-50'>Freelancing Services</div>
                </div>
                <p className='text-xs sm:text-lg text-xs sm:text-lg md:text-xl'>Access to a network of skilled freelancers for project-specific requirements, from coding to design.</p>
            </div>
            {/*  */}
            <div className='flex flex-col gap-4'>
                <div className='w-100'>
                    <div>
                        <img src={MobileApp} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='bg-darker-theme py-2 sm:text-lg md:text-xl md:py-4 w-50'>Mobile App Development</div>
                </div>
                <p className='text-xs sm:text-lg text-xs sm:text-lg md:text-xl'>Development of intuitive and cross-platform mobile applications catering to the on-the-go consumer.</p>
            </div>
            {/*  */}
        </div>
    </div>
  )
}

export default ServicesPage