import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Carousel from './components/Carousel'
import './App.css'
import AboutUs from './pages/AboutUs'
import Impact from './pages/impact/Impact'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Impact />
      <Contact />
      {/* <Carousel />
      <Carousel />
      <Carousel /> */}
    </>
  )
}

export default App
