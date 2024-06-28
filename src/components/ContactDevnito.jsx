import React from 'react';
import '../Styles/contactDevnito.css';
import Email from '../assets/emailAddress.png'
import Phone from '../assets/mobilePhone.png'


const ContactDevnito = () => {
  return (
    <div className='ContactDevnito p-6 sm:px-10 md:p-12 font-josefin'>
      <h1 className='px-4 sm:px-10 md:px-12 font-bold text-lg sm:text-2xl'>Contact DevNito</h1>
      <p className='px-4 sm:px-10 md:px-12 text-xs sm:text-sm text-gray-400'>Get in Touch with Us</p>
      <div className='ContactImg  flex flex-col mt-10'>
          <form className='gap-4 md:gap-8 ml-6 sm:ml-10 mt-4 sm:mt-8 p-4 sm:py-8 md:py-10 flex justify-center items-center w-40 sm:w-52 md:w-60 h-auto flex-col bg-dark-theme'>
            <h1 className='text-xs sm:text-sm white font-bold'>LEAVE US MESSAGE</h1>
            <div>
              <input className='bg-dark-theme placeholder-textgray font-josefin text-xs md:text-sm outline-none border-b-2 border-gray-600 w-full md:w-52' placeholder='Name' type='text' id='name' name='name' required />
            </div>
            <div>
              <input className='bg-dark-theme placeholder-textgray font-josefin text-xs md:text-sm outline-none border-b-2 border-gray-600 w-full md:w-52' placeholder='Email' type='email' id='email' name='email' required />
            </div>
            <div>
              <textarea className='bg-dark-theme placeholder-textgray font-josefin text-xs md:text-sm outline-none border-b-2 border-gray-600 w-full md:w-52' placeholder='Message' id='message' name='message' required></textarea>
            </div>
            <div>
              <button type='submit' className='bg-darker-theme py-2 px-12 text-xs md:text-sm font-josefin'>Send</button>
            </div>
          </form>
        
        <div className='contacts sm:ml-12 sm:mb-12 flex flex-col gap-2 justify-start items-start  mx-8 mt-4 mb-4'>
          <div className='flex justify-center items-center'>
            <img src={Phone} alt="Phone" className='w-6 h-6 md:w-8 md:h-8'/>
            <div className='flex flex-col'>
              <span className='text-xs md:text-sm'>Phone</span>
              <span className='text-xs md:text-sm text-gray-400'>+971501579610</span>
            </div>
          </div>
          <div  className='flex pl-1 justify-center items-center'>
            <img src={Email} alt="Email" className='w-4 h-4 md:w-6 md:h-6'/>
            <div className='flex flex-col pl-2'>
              <span className='text-xs md:text-sm'>Email</span>
              <span className='text-xs md:text-sm text-gray-400'>contact@devnito.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDevnito;
