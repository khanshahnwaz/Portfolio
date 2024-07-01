import React from 'react'

const Header = () => {
  return (
    <header className='w-full p-5'>
<div className='flex justify-between'>
    <div className='text-left text-xl font-bold inline-block bg-[#200971] border-2 rounded-lg  px-1'><p className='font-serif text-white'>SK</p></div>
    <div>
        <ul className='flex justify-around md:w-96'>
            <li className='hover:underline hover:font-semibold cursor-pointer ' >Home</li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' >About</li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' >Works</li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' >Contact</li>
        </ul>
    </div>
</div>
    </header>
  )
}

export default Header