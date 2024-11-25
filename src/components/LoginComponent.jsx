import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const LoginComponent = () => {
  return (
    <div className="container">
      <form onSubmit={LoginComponent}>
        <h1 style={{ color: 'black',fontWeight: 'bold',fontSize:20 }}>Login</h1>
      
        
        <label style={{ color: 'black' }}>Email</label>
        <input type="email" placeholder="enter email" />
        
        <label style={{ color: 'black' }}>Password</label>
        <input type="password" placeholder="enter password" />
        <Link to = "/map">
        <button type="submit" style={{ color: 'black',fontWeight: 'bold', }}>Sign In</button>
        </Link>
        <p className= "text-sm text-center mt-4"> Not registered yet?{" "}<Link to = "/Register" className=''> Create an Account </Link> 
            </p>
      </form>
  
      
         
    </div>
  )
}

export default LoginComponent

