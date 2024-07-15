import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.init("Fdw9Lui_H7KZO3dgw");

    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_om18h3z",
        "template_695wyk8",
        {
          from_name: name,
          to_email: email,
          message: message,
          reply_to: email,
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error, error.text);
    }
  };

  return (
    <div className='2xl:max-w-screen-2xl 2xl:mx-auto Contact gap-10 py-12 px-6 flex flex-col justify-center items-center text-center'>
      <h1 className='font-bold text-xl font-josefin sm:text-2xl md:text-3xl'>Contact DevNito</h1>
      <div className='bg-lighter-theme px-6 sm:px-12 md:px-20 pb-10 flex flex-col gap-5 md:gap-10 justify-center items-center text-center'>
        <h1 className='bg-darker-theme text-xs sm:text-sm md:text-lg font-josefin px-5 py-4 rounded-b-2xl'>Get in Touch with Us</h1>
        <form    onSubmit={handleSubmit} className='gap-4 md:gap-6 flex flex-col'>
          <div className='gap-4 md:gap-6 flex flex-col lg:flex-row'>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20 outline-none' placeholder='Your Name' type='text' name='name' value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none'  type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required/>
          </div></div>
          <div className='gap-4 md:gap-6 flex flex-col lg:flex-row'>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none' type="number"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                required/>
          </div>
          <div>
            <input className='bg-dark-theme  placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none' placeholder='Subject' type='text' id='subject' name='subject' required />
          </div></div>
          <div>
            <textarea className='lg:w-full bg-dark-theme placeholder-textgray py-2 pl-4 font-josefin text-xs sm:text-sm sm:pr-10 md:text-lg md:pr-20  outline-none'   name="message"
                placeholder="Describe Your Project Need."
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"></textarea>
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
