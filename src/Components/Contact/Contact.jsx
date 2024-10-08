import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='grid gap-y-2' id='contact'>
    <p className='text-[#200971] text-left tracking-wide text-sm'>Contact_______</p>
    <p className='text-left font-semibold font-serif tracking-wide text-lg'>Get in touch 😎 </p>
    
    <div className='border-2 border-[#200971] sm:flex justify-around w-[100%]  p-5'>
         <div className='text-left'>
           <p>Email 📝</p>
           <a className='hover:underline' href='mailto:shahnwazkhan2007@gmail.com'>shahnwazkhan2007@gmail.com</a>
         </div>
         <div className='text-left'>
            <p>Phone 📱</p>
            <p>+91 9142277970</p>
         </div>
    </div>
    <div className='flex justify-center gap-x-2'>
    <a href='https://github.com/khanshahnwaz' target='_blank'><FaGithub/></a>

      <a href='https://www.linkedin.com/in/khanshahnwaz/' target='_blank'><FaLinkedin/></a>
     <a href='https://www.instagram.com/shahnwaz20_07/' target='_blank'><FaInstagram/></a>
    </div>
    </div>
  )
}

export default Contact