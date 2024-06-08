import React, { useEffect, useState } from 'react';
import { CiCircleMinus } from 'react-icons/ci';
import { useAuthContext } from '../context/AuthContext';
import { useUpdateImpact } from '../hooks/useUpdateImpact';
import { useDeleteImpact } from '../hooks/useDeleteImpact';

const Slider = ({ slides, impact }) => {
    const { authUser } = useAuthContext();
    const { loading, deleteImpact } = useDeleteImpact();
    // const { updateImpact } = useUpdateImpact();
    // const [isDeleting, setIsDeleting] = useState(false);
    const handleSubmit = async () => {
        console.log("deleted");
    };
    // console.log(authUser);
    return (
        <div className="w-full md:w-3/5 carousel shadow-lg rounded-box">
            {slides.map((item, index) => (
                <div className="carousel-item w-full" id={index}>
                    <div className=' flex flex-col justify-center items-center w-auto md:text-3xl text-center font-[Poppins] font-light relative'>
                        {authUser && authUser.member === "Member" && (
                            <div className='absolute top-3 right-3'>
                                <CiCircleMinus
                                    className='size-7 text-red-800 '
                                    onClick={handleSubmit}
                                // disabled={isDeleting}
                                />
                            </div>
                        )}
                        <div className='w-4/5 m-2 md:mt-10'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex id quis voluptatem labore! Illum vitae a eveniet ab incidunt expedita delectus natus neque, aliquid ad ex, fugit temporibus nemo!
                        </div>
                        <div className='bg-gray-300 m-5 w-4/5 h-[0.1px] '></div>
                        <div className='m-2 mb-10 font-sans flex justify-center items-start'>
                            <div>
                                <img src={item.profilePicture} alt='member' className='size-10 mx-2 rounded-full' />
                            </div>
                            <div>
                                {item.username}
                                <p className='text-lg text-gray-500'>
                                    {item.member}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Slider;
