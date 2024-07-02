import React from 'react'
import express from '../Assets/express.png'
import react from '../Assets/react.png'
import node from '../Assets/nodejs.jpg'
import nextjs from '../Assets/nextjs.png'
import js from '../Assets/js.png'
import mongo from '../Assets/mongodb.jpg'
import mysql from '../Assets/mysql.jpg'
import redis from '../Assets/redis.jpg'
const Skills = () => {
  const skillArr=[react,nextjs,js ,node,express,mysql,mongo,redis]
  return (
    <div className='grid gap-y-2' id='skills'>
    <p className='text-[#200971] text-left tracking-wide text-sm'>Tech_______</p>
    <p className='text-left font-semibold font-serif tracking-wide text-lg'>Technologies which I know 👨‍💼 </p>
    <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-2'>
        {
          skillArr.map((item,i)=>{
           return <div key={i} className='opacity-80 inline-block px-3 py-2 w-max fill-gray-800'>
            <img  src={item} alt={i} className='h-16 sm:h-28 md:h-52 w-16 sm:w-28 md:w-52'/>
           </div>
          })
        }
    </div>
    </div>
  )
}

export default Skills