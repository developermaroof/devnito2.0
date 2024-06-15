import React from 'react';

const Contact = () => {
  return (
    <div className='Contact gap-10 py-12 px-6 flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold text-xl font-josefin sm:text-2xl md:text-3xl'>Contact DevNito</h1>
      <div className='bg-lighter-theme px-6 sm:px-12 md:px-20 pb-10 flex flex-col gap-5 md:gap-10 justify-center items-center text-center'>
        <h1 className='bg-darker-theme text-xs sm:text-sm md:text-lg font-josefin px-5 py-4 rounded-b-2xl'>Get in Touch with Us</h1>
        <form className='gap-4 md:gap-6 flex flex-col'>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20 outline-none' placeholder='Your Name' type='text' id='name' name='name' required />
          </div>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none' placeholder='Email' type='email' id='email' name='email' required />
          </div>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none' placeholder='Phone Number' type='tel' id='phone' name='phone' required />
          </div>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none' placeholder='Subject' type='text' id='subject' name='subject' required />
          </div>
          <div>
            <textarea className='bg-dark-theme placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none' placeholder='Message' id='message' name='message' required></textarea>
          </div>
          <div>
            <button type='submit' className='bg-darker-theme px-6 py-2 text-xs sm:text-sm md:text-lg rounded-xl font-josefin'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
