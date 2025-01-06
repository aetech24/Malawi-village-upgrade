import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from'./pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      {/* You can add your routing here 👇👇 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App