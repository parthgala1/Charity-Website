import React from 'react'
import photo from '../../assets/images/whoweare.avif'
import Slider from '../../components/Slider'
import useGetMembers from '../../hooks/useGetMembers'
import useGetImpact from '../../hooks/useGetImpact'

const Impact = () => {
    const { loading, members } = useGetMembers()
    const { impact } = useGetImpact()
    return (
        <div id='impact' className='h-screen flex md:flex-row flex-col justify-center md:justify-end items-center relative'>
            <div className='md:absolute md:top-auto md:left-0 w-full md:w-1/2 h-3/5 flex flex-col justify-center md:justify-start items-center z-40 px-2 md:rotate-90'>
                <p className='w-auto mt-2 text-center text-4xl md:text-6xl font-serif font-semibold'>Our Impact</p>
                {/* <p className=' w-1/2 text-center text-[30px] font-serif border-dashed rounded leading-normal border-2 border-slate-500   mr-10 -rotate-90'>
                </p> */}
                <div className='w-full md:-rotate-90 p-10 md:-my-28'>
                    <Slider slides={members} impact={impact} />
                </div>
            </div>
            <img src={photo} alt="/" className='w-full md:w-3/5 z-10 object-cover rounded-l-md' />
        </div>
    )
}

export default Impact