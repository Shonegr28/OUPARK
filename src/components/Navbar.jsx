import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <img className='logo' src={assets.logo} alt="" />
        <ul>
            <NavLink className='re' to='/'>
                <li>HOME</li>
                <hr/>

            </NavLink>
            <NavLink className='re' to='/about'>
                <li>ABOUT</li>
                <hr/>
                
            </NavLink>
            <NavLink className='re' to='/login'>
                <li>LOGIN</li>
                <hr/>
                
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar
