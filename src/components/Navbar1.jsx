import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import './Navbar1.css'

const Navbar1 = () => {
  return (
    <div>
    <img className='logo' src={assets.logo} alt="" />
    <ul>
        <NavLink className='re' to='/'>
            <li>HOME</li>
        </NavLink>
        <NavLink className='re' to='/about'>
            <li>ABOUT</li>
        </NavLink>
        <NavLink className='re' to='/'>
            <li>LOGOUT</li>
        </NavLink>
    </ul>
</div>
  )
}

export default Navbar1
