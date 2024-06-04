import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbLogout2 } from "react-icons/tb";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import { useAuthContext } from '../context/AuthContext.jsx';
import useLogout from '../hooks/useLogout.js';

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            setIsMenuOpen(false); // Close the menu after clicking
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`mt-0 rounded opacity-75 hover:opacity-100 duration-200 lg:fixed top-0 left-0 right-0 z-50 min-w-96 p-3 m-1 border-collapse border-b-1 border-gray-600 bg-white flex lg:flex-row flex-col justify-between items-center font-[Poppins] ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className='flex justify-between items-center lg:mx-12'>
                <img src={logo} alt="/" className='h-12 w-12' />
                <p className='text-3xl font-medium'>Jivam Group</p>
                <div className='lg:hidden mx-5'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>
            <div className='p-4 flex flex-row justify-center items-center'>
                <div className='hidden lg:flex'>
                    <Link to="/" className='text-lg decoration-none px-5'>Home</Link>
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
            {isMenuOpen && (
                <div className='h-screen w-full top-16 left-0 flex flex-col items-center lg:hidden z-10'>
                    <Link to="/" className='text-lg decoration-none px-5 py-2' onClick={toggleMenu}>Home</Link>
                    <button onClick={() => scrollToComponent('who-we-are')} className='text-lg decoration-none px-5 py-2'>
                        Who We Are
                    </button>
                    <button onClick={() => scrollToComponent('what-we-do')} className='text-lg decoration-none px-5 py-2'>
                        What We Offer
                    </button>
                    <button onClick={() => scrollToComponent('impact')} className='text-lg decoration-none px-5 py-2'>
                        Our Impact
                    </button>
                    <button onClick={() => scrollToComponent('details')} className='text-lg decoration-none px-5 py-2'>
                        Members
                    </button>
                    <button onClick={() => scrollToComponent('contact')} className='text-lg decoration-none px-5 py-2'>
                        Contact Us
                    </button>
                    {authUser && (
                        <button onClick={() => scrollToComponent('home')} className='text-lg decoration-none px-5 py-2'>
                            <div>
                                <img src={authUser.profilePicture} className='size-8 mx-2 rounded-lg' onClick={logout} alt="" />
                            </div>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
