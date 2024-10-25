import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const LoginComponent = () => {
  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 style={{ color: 'black',fontWeight: 'bold',fontSize:20 }}>Login</h1>
      
        
        <label htmlFor="email" style={{ color: 'black' }}>Email</label>
        <input id="email" type="email" placeholder="enter email" />
        
        <label htmlFor="password" style={{ color: 'black' }}>Password</label>
        <input id="password" type="password" placeholder="enter password" />
        
        <button type="submit" style={{ color: 'black',fontWeight: 'bold', }}>Sign In</button>
        <p className= "text-sm text-center mt-4"> Not register yet?{" "}<Link to = "/Register" className=''> Create an Account </Link> 
            </p>
      </form>
  
      
         
    </div>
  )
}

export default LoginComponent

