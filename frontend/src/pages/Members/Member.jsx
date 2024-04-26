import React from 'react'
import useGetMembers from '../../hooks/useGetMembers'
import Card from '../../components/Card'
import { useAuthContext } from '../../context/AuthContext'
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Member = () => {
    const { loading, members } = useGetMembers()
    const { authUser } = useAuthContext()
    const history = useNavigate()

    const handleSubmit = () => {
        history('/register')
        console.log('clicked');
    }

    return (
        <div id='details' className='h-full my-10 flex flex-col justify-center items-center '>
            <div className='flex flex-col justify-center items-center w-full tex-center'>
                <h1 className='text-5xl font-semibold font-serif'>Our Helping Hands</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque quo placeat!</h2>
            </div>
            <div className='flex flex-wrap justify-center items-center w-full text-center my-10'>
                {members.map((member, idx) => (
                    <Card
                        key={member._id}
                        member={member}
                        lastIdx={idx === members.length - 1}
                    />
                ))}
                {
                    authUser && authUser.member === 'Member' && (
                        <div className='w-1/3 h-full p-5 flex items-center justify-center'>
                            <IoMdAdd className='size-20 text-red-500 active:text-red-300' onClick={handleSubmit} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Member