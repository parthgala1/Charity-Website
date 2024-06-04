import React from 'react'
import Carousel from '../../components/Carousel'
import SubHome from '../../components/SubHome'
import Image from '../../components/Image'

const Home = () => {
    return (
        <div id='home' className='h-auto w-full ' >
            <div className="h-screen flex lg:flex-row flex-col justify-between items-center">
                <SubHome />
                <Image />
            </div>
        </div>
    )
}

export default Home