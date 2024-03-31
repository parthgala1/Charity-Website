import React, { useState, useEffect } from 'react'
import { TbLogout2 } from "react-icons/tb";
import logo from '../assets/logo.png';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import { useAuthContext } from '../context/AuthContext.jsx';
import useLogout from '../hooks/useLogout.js';


const Navbar = () => {
    const { authUser } = useAuthContext()
    const { loading, logout } = useLogout()

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollHeight > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='shadow-lg mt-0 rounded opacity-75 hover:opacity-100 duration-200 fixed top-0 left-0 right-0 z-50 min-w-96 p-3 m-1 border-collapse border-b-1 bg-white border-gray-600 flex justify-between items-center  font-[Poppins]'>
            <div className={`flex justify-center items-center duration-300 ${isScrolled ? 'opacity-1' : 'opacity-0'}`}>
                <img src={logo} alt="/" className='h-12 w-12' />
                <p className=' text-3xl font-medium'>Jivam Group</p>
            </div>
            <div className='p-4 flex flex-row justify-center items-center'>
                <a href='#home' className='text-lg decoration-none px-5'>
                    Home
                </a>
                <a href='#who-we-are' className='text-lg decoration-none px-5'>
                    Who We Are
                </a>
                <a href='#what-we-do' className='text-lg decoration-none px-5'>
                    What We Offer
                </a>
                <a href='#impact' className='text-lg decoration-none px-5'>
                    Our Impact
                </a>
                <a href='#details' className='text-lg decoration-none px-5'>
                    Members
                </a>
                <a href='#contact' className='text-lg decoration-none px-5'>
                    Contact Us
                </a>
                {authUser ? <a href='#contact' className='text-lg decoration-none px-5'>
                    <TbLogout2 className="w-7 h-7 cursor-pointer text-slate-600" onClick={logout} />
                </a> : ''}
            </div>
        </div >
    )
}

export default Navbar