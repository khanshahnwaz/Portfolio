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
        <div className='grid break-words'>
<p className='text-left tracking-wide font-serif'>I'm Shahnwaz Khan, a professional and talented web developer with front-end and back-end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, web designing, testing and programming.</p>
<p className='text-left tracking-wide font-serif'>I specialize in full-stack development using the MERN stack and have additional expertise in Next.js, Tailwind CSS, MySQL, Redis, GitHub, and Git. Over the past few years, I have successfully delivered several complex projects, including <b>virtual lab development(initiative of MHA Govt. of India) under IIT Delhi</b>, Data management, Profile Management etc, which have significantly enhanced my problem-solving and coding skills. These have equipped me with a solid foundation in both theoretical and practical aspects of web development.</p>
<p className='text-left tracking-wide font-serif'>
My educational background includes Bachelors in Computer Science from University Of Delhi with <b>9.095 CGPA</b> and I also got <b>AIR 497 </b> in NIMCET 2024. 
</p>
<p className='text-left tracking-wide font-serif'>
Apart from my technical skills, I am a diligent, hardworking, and result-oriented person who always strives to achieve the best results. My strong communication and teamwork skills have been instrumental in collaborating effectively with clients and team members.
</p>
<p className='text-left tracking-wide font-serif'>
In my free time, I enjoy doing exercise and yoga, which helps me stay creative and motivated. Looking ahead, I am eager to continue expanding my expertise and take on new challenges in the field of web development, with the goal of making impactful contributions to innovative projects.
</p>
        </div>
    </div>
    </div>
  )
}

export default About