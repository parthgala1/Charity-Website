import React, { useState, useEffect } from 'react';
import { TbLogout2 } from "react-icons/tb";
import logo from '../assets/logo.png';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import { useAuthContext } from '../context/AuthContext.jsx';
import useLogout from '../hooks/useLogout.js';

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollHeight > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToComponent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={` mt-0 rounded opacity-75 hover:opacity-100 duration-200 fixed top-0 left-0 right-0 z-50 min-w-96 p-3 m-1 border-collapse border-b-1 border-gray-600 bg-white flex justify-between items-center  font-[Poppins] ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className='flex justify-center items-center mx-12'>
                <img src={logo} alt="/" className='h-12 w-12' />
                <p className=' text-3xl font-medium'>Jivam Group</p>
            </div>
            <div className='p-4 flex flex-row justify-center items-center'>
                <button onClick={() => scrollToComponent('home')} className='text-lg decoration-none px-5'>
                    Home
                </button>
                <button onClick={() => scrollToComponent('who-we-are')} className='text-lg decoration-none px-5'>
                    Who We Are
                </button>
                <button onClick={() => scrollToComponent('what-we-do')} className='text-lg decoration-none px-5'>
                    What We Offer
                </button>
                <button onClick={() => scrollToComponent('impact')} className='text-lg decoration-none px-5'>
                    Our Impact
                </button>
                <button onClick={() => scrollToComponent('details')} className='text-lg decoration-none px-5'>
                    Members
                </button>
                <button onClick={() => scrollToComponent('contact')} className='text-lg decoration-none px-5'>
                    Contact Us
                </button>
                {authUser && (
                    <button onClick={() => scrollToComponent('home')} className='text-lg decoration-none px-5'>
                        <div>
                            <img src={authUser.profilePicture} className='size-8 mx-2 rounded-lg' onClick={logout} alt="" />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;

{/* <TbLogout2 className="w-7 h-7 cursor-pointer text-slate-600" onClick={logout} /> */ }