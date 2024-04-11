import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const Register = () => {
    const [hidePassword, setHidePassword] = useState(true)
    const handlePassword = (e) => {
        e.preventDefault();
        !hidePassword ? setHidePassword(true) : setHidePassword(false)
        console.log(hidePassword);
    }

    const [checked, setChecked] = React.useState(false);
    const handleChange = (e) => {
        !checked ? setChecked(true) : setChecked(false)
        console.log(checked);
    }

    const [user, setUser] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        profilePicture: '',
        member: 'Member'
    })

    const { loading, signup } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        await signup(user);
    }

    return (
        <div className="h-screen bg-gradient-to-br from-indigo-600 to-blue-300 flex justify-center items-center">

            < div className='rounded-xl bg-slate-100 p-10 px-10' >
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='text-center font-serif font-thin py-4 text-2xl'>
                        Jivam Group Master Signup
                    </div>
                    <div className='m-3 '>
                        {/* <label className='w-screen p-10 text-center' >Username</label> */}
                        <input
                            type="text"
                            placeholder='Name'
                            className='input focus:border-2 focus:border-blue-500 bg-inherit input-bordered w-full max-w-xs'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className='mx-3 mb-3'>
                        <label className='opacity-0' >Username</label>
                        <input
                            type="text"
                            placeholder='Username'
                            className='input focus:border-2 focus:border-blue-500 bg-inherit input-bordered w-full max-w-xs'
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
                    <div className='mx-3 mb-3 relative'>
                        <label className='opacity-0' >Password</label>
                        <input
                            type={hidePassword ? 'password' : 'text'}
                            placeholder='Password'
                            className='input focus:border-2 bg-inherit input-bordered focus:border-blue-500 w-full 
                          max-w-xs relative'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <button className='absolute top-10 right-10 ' onClick={handlePassword}>{hidePassword ? <FaEyeSlash className='text-slate-600' /> : <FaEye className='text-slate-600' />}</button>
                    </div>
                    <div className='mx-3 mb-3 relative'>
                        <label className='opacity-0' >Password</label>
                        <input
                            type={hidePassword ? 'password' : 'text'}
                            placeholder='Confirm Password'
                            className='input focus:border-2 bg-inherit input-bordered focus:border-blue-500 w-full 
                          max-w-xs relative'
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className='mx-3 mb-3 '>
                        <label className='opacity-0' >Profile </label>
                        <input
                            type='file'
                            name='my_file'
                            className=' bg-inherit input-bordered focus:border-blue-500 w-full 
                          max-w-xs relative'
                            onChange={(e) => setUser({ ...user, profilePicture: e.target.files[0] })}
                        />
                    </div>
                    <div className="w-full justify-center form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Member</span>
                            <input
                                type="checkbox"
                                className="toggle [--tglbg:white] bg-blue-500 hover:bg-blue-500"
                                onClick={handleChange}
                                onChange={(e) => setUser({ ...user, member: e.target.checked ? 'Non-Member' : 'Member' })}
                            />
                            <span className="label-text">Non-Member</span>
                        </label>
                    </div>
                    <div className='m-3 text-sm pl-3 hover:text-blue-600 '>
                        <Link to="/login">Already Have an Account?</Link>
                    </div>
                    <div className='m-3 flex justify-center '>
                        <button className='btn p-3 bg-inherit font-serif text-blue-400 hover:text-white text-lg font-semibold btn-ghost btn-outline hover:bg-indigo-400' disabled={loading}>
                            {loading ? <span className='loading loading-spinner' ></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Register