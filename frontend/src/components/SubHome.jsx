import { useEffect, useState } from "react";
import React from 'react';
import logo from '../assets/logo.png';

const SubHome = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollHeight > 0);
    };

    // Immediately check if the page is initially scrolled
    useEffect(() => {
        handleScroll();
        // Add a delay to allow the transition to take effect when the page is reloaded
        const delay = setTimeout(() => {
            setIsScrolled(true);
        }, 500);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className={`px-6 lg:px-12 w-full h-full flex flex-col justify-center items-start ease-out duration-1000 ${isScrolled ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex w-full justify-center items-center">
                <img src={logo} alt="/" className='h-32 w-32 lg:h-48 lg:w-48' />
                <div className="flex flex-col items-center ml-4">
                    <p className='text-3xl lg:text-6xl font-medium font-[Alegreya] text-[#301A0F]'>
                        Jivam Group
                    </p>
                    <p className="text-base lg:text-lg">
                        "LIVE N LET LIVE"
                    </p>
                </div>
            </div>
            <div className="mt-2 w-full lg:w-4/5 text-left flex flex-col justify-center ">
                <p className="text-xl lg:text-4xl font-thin font-serif px-3">
                    A Small Foundation made for Jivadaya at gaushala, panjrapor and helping needy people like anath ashrams vrudh ashrams just for a simple cause,
                </p>
                <a href="https://wa.me/919820988506" target="_blank" rel="noopener noreferrer" className="bg-[#4b2817] mt-6 p-2 text-center rounded-2xl text-white hover:text-[#9f8266] hover:bg-[#301A0F] transform hover:scale-95 transition ease-in-out duration-300">
                    Donate Now
                </a>
            </div>
        </div>
    );
}

export default SubHome;
