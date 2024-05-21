import React from 'react'
import logo from '../assets/logo-removebg.png'

const Preloader = () => {
    return (
        <div className=' flex justify-center items-center bg-gradient-to-t from-slate-100 to-white h-screen'>
            <img src={logo} alt="" className='size-40 transition animate-spin-slow text-center' />
        </div>
    )
}

export default Preloader