import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import WordPressPlugin from './pages/WordPressPlugin'
import Resources from './pages/Resources'
import Footer from './pages/Footer/Footer'
import Hero from './pages/Hero/Hero'





function App() {
  
  return (
    <div>
      
      
      <Navbar/>
      
      

      
      
      <Routes>
      <Route path = "/hero" element = {<Hero />} />
      <Route path='/' element = {<Features />} />
      <Route path = '/pricing' element = {<Pricing />} />
      <Route path = '/wordpressplugin' element = {<WordPressPlugin/>} />
      <Route path = '/resources' element = {<Resources />} />
      
      
      
      </Routes>

      

      <Footer />
      
    </div>
  )
}

export default App