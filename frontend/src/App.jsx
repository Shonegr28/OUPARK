import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Map from './pages/Map'
import Myprofile from './pages/Myprofile'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/myprofile' element={<Myprofile/>} />



      </Routes>

    </div>
  )
}

export default App
