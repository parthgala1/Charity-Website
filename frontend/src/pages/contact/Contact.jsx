import React from 'react'
import photo from '../../assets/images/photo-1682685797088-283404e24b9d.avif'
import './Contact.css'
import { FaHome } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <img src={photo} className='' id='' alt="" />
            <FaHome className='w-10 h-10 text-blue-600 animate-bounce' />
        </div>
    )
}

export default Contact