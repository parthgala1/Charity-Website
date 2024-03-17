import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { TbLayoutNavbarExpand } from "react-icons/tb";

const Navbar = () => {
    const [visible, setvisible] = useState(true)

    return (
        <div className='h-screen flex justify-center items-center'>
            Navbar
        </div>
    )
}

export default Navbar