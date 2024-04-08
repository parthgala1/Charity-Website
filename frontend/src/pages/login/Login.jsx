import React, { useState } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin.js';

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true)
    const handlePassword = (e) => {
        e.preventDefault();
        !hidePassword ? setHidePassword(true) : setHidePassword(false)
        console.log(hidePassword);
    }

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(user.username, user.password)
    }

    const { loading, login } = useLogin()



    return (
        <div className="h-screen bg-gradient-to-br from-indigo-600 to-blue-300 flex justify-center items-center">

            < div className='rounded-xl bg-slate-100 p-10' >
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='text-center font-serif font-thin py-4 text-2xl'>
                        Jivam Group Master Login
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
                        <button className='absolute top-10 right-5' onClick={handlePassword}>{hidePassword ? <FaEyeSlash className='text-slate-600' /> : <FaEye className='text-slate-600' />}</button>
                    </div>

                    <div className='m-3 text-sm pl-3 hover:text-blue-600 '>
                        <Link to="/register">Don't Have an Account?</Link>
                    </div>

                    <div className='m-3 flex justify-center '>
                        <button className='btn p-3 bg-inherit font-serif text-blue-400 hover:text-white text-lg font-semibold btn-ghost btn-outline hover:bg-indigo-400'>
                            {loading ? <span className='loading loading-spinner' ></span> : 'Login'}</button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Login