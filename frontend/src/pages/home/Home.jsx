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

const Home = () => {
    return (
        <div id='home' className='h-screen w-full' >
            <div className="h-[430px] flex justify-center items-center">
                <SubHome />
            </div>
            <div className=' h-[330px] relative w-full'>
                <div className="absolute top-0 left-0">
                    <Carousel slides={donate1} />
                </div>
                <div className="absolute top-0 left-[430px]">
                    <Carousel slides={donate2} />
                </div>
                <div className=" absolute top-0 left-[861px]">
                    <Carousel slides={donate3} />
                </div>
                <div className=" absolute top-0 left-[1291px]">
                    <Carousel slides={donate4} />
                </div>
                <div className="absolute top-52 left-0">
                    <Carousel slides={donate5} />
                </div>
                <div className="absolute top-52 left-[430px]">
                    <Carousel slides={donate6} />
                </div>
                <div className=" absolute top-52 left-[861px]">
                    <Carousel slides={donate7} />
                </div>
                <div className=" absolute top-52 left-[1291px]">
                    <Carousel slides={donate8} />
                </div>
            </div>
        </div>
    )
}

export default Home