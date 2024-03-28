import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Carousel from './components/Carousel'
import './App.css'
import AboutUs from './pages/AboutUs'
import Impact from './pages/impact/Impact'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {


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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Carousel />
      <Carousel />
      <Carousel /> */}
    </>
  )
}

export default App
