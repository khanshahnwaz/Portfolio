import React, { useState,useEffect } from 'react'

const Header = () => {
  const [scrolled,setScroll]=useState('');
  let listener=null
  useEffect(() => {
		listener = document.addEventListener("scroll", (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				setScroll("fixed w-4/5");
			}else setScroll('static') 
		});
		return () => {
			document.removeEventListener("scroll", listener);
      
		};
	}, [scrolled]);
  return (
    <header className={` p-5 bg-white z-20 ${scrolled}`} id='header'>
<div className='flex justify-between'>
    <div className='text-left text-xl font-bold inline-block bg-[#200971] border-2 rounded-lg  px-1'><p className='font-serif text-white'>SK</p></div>
    <div>
        <ul className='flex justify-around w-full md:w-96 gap-4'>
            <li className='hover:underline hover:font-semibold cursor-pointer ' ><a href='#profile'>Home</a></li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' ><a href='#about' >About</a></li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' ><a href='#works' >Works</a></li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' ><a href='#skills' >Skills</a></li> 
            <li className='hover:underline  hover:font-semibold cursor-pointer ' ><a href='#contact' >Contact</a></li>
        </ul>
    </div>
</div>
    </header>
  )
}

export default Header