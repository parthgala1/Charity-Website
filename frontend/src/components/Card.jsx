import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const Card = ({ member }) => {
    return (
        <>
            <div className='w-1/4 my-2 p-5'>
                <div className='rounded-lg hover:bg-white hover:shadow-lg'>
                    <div className='p-4 flex justify-center items-center flex-col'>
                        <img src={member.profilePicture} alt='member' className='w-32 h-32 object-cover object-center rounded-full' />
                        <h2 className='mt-4 text-2xl font-semibold text-center font-serif'>{member.name}</h2>
                        <p className=' text-gray-600 text-center text-md font-mono'>{member.member}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card