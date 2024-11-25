import React from 'react'
import './hero.css'

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      

        <div className='hero-text'>

          

            <h2>Find Your Spot Faster</h2>
            

            
            

        </div>
        
        <div className='hero-button'>
            <Link to="/register">
              <button>Get Started</button>
            </Link>
            
        </div>
      
    </div>
  )
}

export default Hero
