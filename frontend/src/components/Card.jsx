import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { CiCircleMinus } from 'react-icons/ci';
import useDeleteMember from '../hooks/deleteMember';

const Card = ({ member, onDelete }) => {
    const { authUser } = useAuthContext();
    const { loading, deleteMember } = useDeleteMember();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleSubmit = async () => {
        setIsDeleting(true);
        try {
            await deleteMember(member._id);
            setIsDeleting(false);
            onDelete(member._id); // Remove the member from the UI
        } catch (error) {
            console.error(error);
            setIsDeleting(false);
        }
    };

    return (
        <div className='w-1/4 my-2 p-5'>
            <div className='rounded-lg hover:bg-white hover:shadow-lg'>
                <div className='p-4 flex justify-center items-center flex-col relative'>
                    {authUser && authUser.member === 'Member' && (
                        <div className='absolute top-3 right-3'>
                            <CiCircleMinus
                                className='size-7 text-red-800 '
                                onClick={handleSubmit}
                                disabled={isDeleting}
                            />
                        </div>
                    )}
                    <img src={member.profilePicture} alt='member' className='w-32 h-32 object-cover object-center rounded-full' />
                    <h2 className='mt-4 text-2xl font-semibold text-center font-serif'>{member.name}</h2>
                    <p className='text-gray-600 text-center text-md font-mono'>{member.member}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
