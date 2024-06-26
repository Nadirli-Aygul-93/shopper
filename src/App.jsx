import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router'

import Footer from './pages/Footer/Footer'
import Hero from './pages/Hero/Hero'
import Features from './pages/Features/Features'
import Signup from './pages/Sign up/Signup'
import Wordplugin from './pages/Wordplugin/Wordplugin'





function App() {
  
  return (
    <div>
      
      
      <Navbar/>
      
      

      
      
      <Routes>
      <Route path = "/" element = {<Hero />} />
      <Route path='/features' element = {<Features />} />
      <Route path="/signup" element = {<Signup />} />
      <Route path = "/wordplugin" element = {<Wordplugin />} />
      
      
      
      </Routes>

      

      <Footer />
      
    </div>
  )
}

export default App