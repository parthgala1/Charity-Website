import React, { useState, useEffect } from 'react';
import image from '../assets/images/landingpage.png';
import '../App.css';

const Image = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollTop;
        setIsScrolled(scrollHeight > 0);
    };

    useEffect(() => {
        handleScroll();
        const delay = setTimeout(() => {
            setIsScrolled(true);
        }, 500);

        // Update isWideScreen state when window is resized
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(delay);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`w-full h-full flex transition-transform duration-1000 ease-in-out transform ${isScrolled ? 'translate-x-0' : 'translate-x-full'}`}>
            <img src={image} alt="" className={`object-cover object-left ${isWideScreen ? 'clip-polygon' : 'md:clip-none'}`} />
        </div>
    );
};

export default Image;
