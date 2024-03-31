import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const slideNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        };

        intervalRef.current = setInterval(slideNext, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className='min-w-[573px] min-h-[400px] h-auto w-[573px]'>
            <div className="relative flex items-center ">
                {slides.map((item, index) => (
                    <img
                        key={index}
                        className={` w-full h-96 shadow-xl shadow-slate-500 absolute top-0 left-0 cursor-pointer ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        src={item.url}
                        alt='/'
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
