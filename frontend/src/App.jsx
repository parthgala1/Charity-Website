import { useEffect, useState } from 'react'
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
import Offer from './pages/Offer/Offer.jsx'
import Gaushala from './pages/Places/Gaushala.jsx'
import Orphanage from './pages/Places/Orphanage.jsx'
import Preloader from './components/Preloader.jsx'
import Thane from './pages/SubPages/Thane.jsx'

function App() {
  const { authUser } = useAuthContext()
  const [loading, setLoading] = useState(false)

  const url = window.location.href.split("/");
  const route = url[url.length - 1];
  console.log(route);
  console.log(window.innerWidth);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
    , [])

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className=' bg-gradient-to-t from-slate-100 to-white'>
            {loading ? <Preloader />
              :
              <>

                <Navbar />
                <Home />
                <AboutUs />
                <Offer />
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
              </>
            }
          </div>
        } />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Gaushala" element={
          <>
            <Navbar />
            <Gaushala />
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
            <Contact />
          </>
        } />
        <Route path='/Gaushala/Thane' element={
          <>
            <Navbar />
            <Thane />
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
            <Contact />
          </>
        } />
        <Route path="/Orphanage" element={
          <>
            <Navbar />
            <Orphanage />
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
            <Contact />
          </>
        } />
      </Routes>
      {/* <Carousel />
      <Carousel />
      <Carousel /> */}
      {/* <Offer /> */}
    </>
  )
}

export default App
