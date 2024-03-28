import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Carousel from './components/Carousel'
import './App.css'
import AboutUs from './pages/AboutUs'
import Impact from './pages/impact/Impact'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { AuthContextProvider, useAuthContext } from './context/AuthContext.jsx'

function App() {
  const { authUser } = useAuthContext()

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className=' bg-gradient-to-tl from-slate-300 to-white'>
            <Navbar />
            <Home />
            <AboutUs />
            <Impact />
            <Contact />
          </div>
        } />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/register" element={authUser ? <Navigate to='/' /> : <Register />} />
      </Routes>
      {/* <Carousel />
      <Carousel />
      <Carousel /> */}
    </>
  )
}

export default App
