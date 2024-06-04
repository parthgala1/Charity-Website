import React, { useState, useEffect } from 'react';
import image from '../assets/images/landingpage.png';
import '../App.css';

const Image = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollTop;
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
        <div className={`w-full h-full flex transition-transform duration-1000 ease-in-out transform ${isScrolled ? 'translate-x-0' : 'translate-x-full'}`}>
            <img src={image} alt="" className='object-cover object-left clip-polygon lg:clip-none' />
        </div>
    );
};

export default Image;
