import React from 'react'
import useGetMembers from '../../hooks/useGetMembers'
import Card from '../../components/Card'

const Member = () => {
    const { loading, members } = useGetMembers()


    return (
        <div id='details' className='h-full my-10 flex flex-col justify-center items-center '>
            <div className='flex flex-col justify-center items-center w-full tex-center'>
                <h1 className='text-5xl font-semibold font-serif'>Our Helping Hands</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque quo placeat!</h2>
            </div>
            <div className='flex justify-center items-center w-full tex-center'>
                {members.map((member, idx) => (
                    <Card
                        key={member._id}
                        member={member}
                        lastIdx={idx === member.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default Member