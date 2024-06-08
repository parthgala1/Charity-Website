import React from 'react'
import Cards from '../../components/Cards'
import WhatWeDo from '../../data/WhatWeDo'

const Offer = () => {
    return (
        <div id='what-we-do' className='flex flex-col justify-center items-center w-full'>
            <div className='text-4xl md:text-6xl font-[Poppins] font-bold md:my-7 content-start'>What We Offer</div>
            <WhatWeDo />
        </div>
    )
}

export default Offer