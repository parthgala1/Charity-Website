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
import AnimatedCursor from 'react-animated-cursor'
import Member from './pages/Members/Member.jsx'

function App() {
  const { authUser } = useAuthContext()

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className=' bg-gradient-to-t from-slate-100 to-white'>
            <Navbar />
            <Home />
            <AboutUs />
            <Impact />
            <Member />
            <Contact />
            <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color='157, 209, 128'
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
              ]} />
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
