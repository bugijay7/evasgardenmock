import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Featured from './Components/Featured'
import Packages from './Components/Packages'
import Gallery from './Components/Gallery'
import Services from './Components/Services'
import Cta from './Components/Cta'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Featured />
    <Packages />
    <Gallery />
    <Services />
    <Cta />
    <Footer />
    </>
  )
}

export default App
