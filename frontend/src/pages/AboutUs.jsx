import React from 'react'
import photo from '../assets/images/whoweare.jpg'

const AboutUs = () => {
    return (
        <div id='who-we-are' className='h-screen flex justify-start items-center relative'>
            <img src={photo} alt="/" className='w-3/5 z-10 object-cover rounded-md' />
            <div className='absolute top-auto right-0 w-1/2 h-3/5 flex flex-col justify-start items-center z-40 px-2 -rotate-90'>
                <p className='w-auto mt-2 text-center text-6xl font-serif font-semibold'>Who We Are</p>
                <p className=' w-1/2  ml-5 text-center text-[30px] font-serif border-dashed rounded leading-normal border-2 border-slate-500 p-4 mr-10 rotate-90'>The Ademia Scholarship Foundation strongly believes that when a student graduates from college, he or she can help achieve their family's dreams and lift themselves out of poverty. Through our financial aid programs, we help high-achieving college students unlock their potential and reach their life-changing milestone.</p>
            </div>
        </div>
    )
}

export default AboutUs