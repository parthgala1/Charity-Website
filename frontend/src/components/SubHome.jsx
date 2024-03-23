import { useEffect, useState } from "react"
import React from 'react'
import logo from '../assets/logo.png'

const SubHome = () => {
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
        <div className={`mb-36 px-12 w-full h-full flex justify-center items-end ease-out duration-150`}>
            <div className="">
                <div className={`flex justify-center items-center scroll-y-smooth ${isScrolled ? 'hidden duration-300' : ''}`}>
                    <img src={logo} alt="/" className='h-48 w-48' />
                    <div className="flex flex-col items-center">
                        <p className=' text-6xl font-medium font-[Alegreya] text-[#301A0F]'>
                            Jivam Group
                        </p>
                        <p className="text-lg">
                            "LIVE N LET LIVE"
                        </p>
                    </div>
                </div>
            </div>
            <div className=" w-1/2  ml-10 text-left text-4xl flex flex-col justify-center">
                <p className=" font-thin font-serif px-3">
                    A Small Foundation made for Jivadaya at gaushala, panjrapor and helping needy people like anath ashrams vrudh ashrams just for a simple cause,
                </p>
                <button className="bg-[#301A0F] m-2 p-2 text-center rounded-2xl text-[#9f8266] hover:text-white hover:rounded-3xl duration-300 w-1/2">Donate Now</button>
            </div>
        </div>
    )
}

export default SubHome