import React from 'react';
import '../Styles/contactDevnito.css';
import Email from '../assets/emailAddress.png'
import Phone from '../assets/mobilePhone.png'

const ContactDevnitoLg = () => {

  return (
    <div className='ContactImgLg ContactDevnito py-20 2xl:max-w-screen-2xl 2xl:mx-auto px-44 font-josefin flex justify-between items-center gap-20'>      
    <div className='contacts flex flex-col gap-2'>
      <h1 className='px-4 font-bold text-3xl'>Contact DevNito</h1>
      <p className='px-4 text-lg text-gray-400'>Get in Touch with Us</p>
      <div className=' flex flex-col gap-4 justify-start items-start mx-8 mt-4 mb-4'>
            <div className='flex justify-center items-center'>
            <img src={Phone} alt="Phone" className='w-10 h-10'/>
            <div className='flex flex-col'>
                <span className='text-lg'>Phone</span>
                <span className='text-lg text-gray-400'>+971501579610</span>
            </div>
            </div>
            <div  className='flex pl-1 justify-center items-center'>
            <img src={Email} alt="Email" className='w-8 h-8'/>
            <div className='flex flex-col pl-2'>
              <span className='text-lg'>Email</span>
              <span className='text-lg text-gray-400'>contact@devnito.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-10'>
          <form className='gap-10 ml-6 mt-4 p-4 flex w-full h-full justify-center items-center py-10 w-44 h-auto flex-col bg-dark-theme'>
            <h1 className='text-xl white font-bold'>LEAVE US MESSAGE</h1>
            <div>
              <input className='bg-dark-theme placeholder-textgray font-josefin text-lg outline-none border-b-2 border-gray-600 w-full' placeholder='Name' type='text' id='name' name='name' required />
            </div>
            <div>
              <input className='bg-dark-theme placeholder-textgray font-josefin text-lg outline-none border-b-2 border-gray-600 w-full' placeholder='Email' type='email' id='email' name='email' required />
            </div>
            <div>
              <textarea className='bg-dark-theme placeholder-textgray font-josefin text-lg outline-none border-b-2 border-gray-600 w-full' placeholder='Message' id='message' name='message' required></textarea>
            </div>
            <div>
              <button type='submit' className='bg-darker-theme py-2 px-12 text-lg font-josefin'>Send</button>
            </div>
          </form>
        
      
      </div>
    </div>
  );
}

export default ContactDevnitoLg;
