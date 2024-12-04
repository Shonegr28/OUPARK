import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Map from './pages/Map'
import Myprofile from './pages/Myprofile'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Navbar1 from './components/Navbar1'
import CreateParkingLot from './pages/CreateParkingLot'
import AccountCreated from './pages/AccountCreated'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      

      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/myprofile' element={<Myprofile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/accountCreated' element={<AccountCreated/>} />

        

        <Route path='/create-parking-lot' element={<CreateParkingLot/>} />


      </Routes>

    </div>
  )
}

export default App
