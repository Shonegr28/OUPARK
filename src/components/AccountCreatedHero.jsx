import React from 'react'
import './AccountCreatedHero.css'

import { Link } from 'react-router-dom'

const AccountCreatedHero = () => {
    return (
      <div className='heee'>
        <div className='AccountCreated'><h1>ACCOUNT CREATED</h1></div>
  
  
        



        <div className='map-page-redirect-button'>
          <Link to="/map">
            <button>Go To Map Page</button>
          </Link>

        </div>

      </div>
    )
  }

  export default AccountCreatedHero