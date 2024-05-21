import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/logo_white.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact' className='flex flex-col justify-center items-center h-[90vh] bg-[#EFA593]'>
            <div className='w-3/5 flex justify-center items-center' >
                <div className="flex flex-col justify-center items-center m-10">
                    <img src={logoWhite} className='size-32 my-10' alt="" />
                    <div className='flex flex-col items-end text-white mb-3'>
                        <p>Sandeep Gala <a href="">9820988506</a></p>
                        <p>Teena Gala <a href="">9004486644</a></p>
                        <p>Parth Gala <a href="">9137937605</a></p>
                    </div>
                    <div className='text-white text-center  m-4'>
                        <p className='text-white'>Email:</p>
                        <a href="mailto:jivamgroup@gmail.com">jivamgroup@gmail.com</a>
                    </div>
                    <div className="text-white">
                        Address:
                    </div>
                    <div className='text-white w-52 text-center'>
                        G-1, Jalaram Ashish, Govind Bachaji Road, Charai, Thane(West).
                    </div>
                    <div className='flex justify-center items-center m-2'>
                        <a href="https://www.facebook.com/jivamgroup/" target='_blank'>
                            <FaFacebookSquare className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                        <a href="https://wa.me/919820988506" target='_blank'>
                            <FaSquareWhatsapp className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                        <a href="" target='_blank'>
                            <FaInstagramSquare className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCIzFvsIlFretAqZpxySaWlg" target='_blank'>
                            <FaYoutube className='h-10 w-10 m-3 text-white hover:cursor-pointer hover:scale-105' />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col text-white items-center m-10 font-[Fira Code] ">
                    <div className='flex w-full px-32 justify-between items-center'>
                        <div className='flex flex-col text-center'>
                            <a href='#home' className='text-lg decoration-none px-5'>
                                Home
                            </a>
                            <a href='#who-we-are' className='decoration-none px-5'>
                                Who We Are
                            </a>
                            <a href='#what-we-do' className='decoration-none px-5'>
                                What We Offer
                            </a>
                            <a href='#details' className='decoration-none px-5'>
                                Members
                            </a>
                            <a href='#contact' className='decoration-none px-5'>
                                Contact Us
                            </a>
                        </div>
                        <div className='flex flex-col text-center' >
                            <Link to="/Gaushala">Gaushala</Link>
                            <Link to="/Orphanage">Orphanage</Link>
                            <Link to="/Medical Camp">Medical Camp</Link>
                            <Link to="/Food Kit">Food Kit</Link>
                            <Link to="/Bird Feeding">Bird Feeding</Link>
                            <Link to="/Keediyaro">Keediyaro</Link>

                        </div>
                    </div>
                    <div className='my-10 text-white text-xl w-4/5 text-center'>
                        At the heart of Jivam Group are people like you who are willing to get involved by donating or volunteering. Together we can change the world!
                    </div>
                    <a href="https://wa.me/919820988506" target="_blank" className="bg-[#fff] m-2 p-2 text-center rounded-2xl text-[#9f8266] hover:text-[#EFA593] hover:rounded-3xl duration-300 w-1/2">Donate Now</a>
                </div>
            </div>
            <hr className=' w-4/5 m-10' />
            <div className='m-7 text-white'>
                Copyright © 2024 · Jivam Group is a registered nonprofit organization.
            </div>
        </div >
    )
}

export default Contact