import React from 'react'
import Carousel from '../../components/Carousel'
import { donate1 } from '../../data/donate1'
import { donate2 } from '../../data/donate2'
import { donate3 } from '../../data/donate3'
import { donate4 } from '../../data/donate4'
import { donate5 } from '../../data/donate5'
import { donate6 } from '../../data/donate6'
import { donate7 } from '../../data/donate7'
import { donate8 } from '../../data/donate8'
import SubHome from '../../components/SubHome'
import Image from '../../components/Image'

const Home = () => {
    return (
        <div id='home' className='h-auto w-full relative ' >
            <div className="h-screen flex justify-between items-center">
                <SubHome />
                <Image />
            </div>
        </div>
    )
}

export default Home