import React from 'react'

const Contact = () => {
  return (
    <div className='grid gap-y-2'>
    <p className='text-[#200971] text-left tracking-wide text-sm'>Contact_______</p>
    <p className='text-left font-semibold font-serif tracking-wide text-lg'>Get in touch 😎 </p>
    
    <div className='border-2 border-[#200971] flex justify-around w-full m-auto p-5'>
         <div className='text-left'>
           <p>Email </p>
           <a className='hover:underline' href='mailto:shahnwazkhan2007@gmail.com'>shahnwazkhan2007@gmail.com</a>
         </div>
         <div className='text-left'>
            <p>Phone</p>
            <p>+91 9142277970</p>
         </div>
    </div>
    </div>
  )
}

export default Contact