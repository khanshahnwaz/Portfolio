import React from "react";
import Slider from "react-slick";
import express from '../Assets/express.png'
import react from '../Assets/react.png'
import node from '../Assets/nodejs.jpg'
import nextjs from '../Assets/nextjs.png'
import js from '../Assets/js.png'
import mongo from '../Assets/mongodb.jpg'
import mysql from '../Assets/mysql.jpg'
import redis from '../Assets/redis.jpg'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const skillArr=[react,nextjs,js ,node,express,mysql,mongo,redis]

  return (
    <Slider {...settings}>
     {
        skillArr.map((item,i)=>{
            return <div key={i} className='opacity-80 inline-block px-3 py-2 w-max fill-gray-800'>
            <img  src={item} alt={i} className='h-16 sm:h-28 md:h-52 w-16 sm:w-28 md:w-52'/>
           </div>
          })
        
     }
    </Slider>
  );
}