import React from 'react'
import profile_photo from '../Assets/profile_photo.jpg'
import resume from '../Assets/Resume.pdf'
const Profile = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='mx-auto w-full grid gap-y-4' id='profile'>

        <img className='mx-auto h-36 md:h-52 rounded-full border-2 border-[#200971]' alt='Profile_Photo' src={profile_photo} loading='lazy'></img>
        <p className='tracking-wider font-semibold py-3'>Hi👋, I'm <br></br> <span className='text-xl font-bold '>Shahnwaz</span></p>
        <button className='px-3 py-1 cursor-pointer hover:opacity-60 transition-opacity delay-100 rounded-xl text-2xl text-white font-serif w-max mx-auto bg-[#200971] hover:underline' onClick={handleDownload}>Resume</button>
    </div>
  )
}

export default Profile