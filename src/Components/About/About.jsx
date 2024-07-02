import React from 'react'
import photo from '../Assets/fullPhoto.jpg'
const About = () => {
  return (
    <div className='grid gap-y-2' id='about'>
        <p className='text-[#200971] text-left tracking-wide text-sm'>About me_______</p>
        <p className='text-left font-semibold font-serif tracking-wide text-lg'>Who I am 😎 </p>
    <div className='md:flex justify-between w-full h-max '>
        <div>
          <img src={photo} alt='Self Intro' className='w-4/5 h-fit rounded-md border-2 border-[#200971]'/>  
        </div>
        <div>
<p className='text-left tracking-wide font-serif'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dolore error at quibusdam harum assumenda perferendis temporibus maiores distinctio, dignissimos similique tenetur, iste nisi magni. Libero doloremque inventore ipsa delectus?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, vero, quis reprehenderit commodi dolorum dolore eveniet nulla recusandae qui assumenda dignissimos quidem voluptatibus maiores, odit quam natus odio accusantium enim.</p>
        </div>
    </div>
    </div>
  )
}

export default About