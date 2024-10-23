import React from 'react';
import './RegisterComponent.css';

const RegisterComponent = () => {
  return (
    <div className="container"> {/* Use the container class for centering */}
      <form onSubmit={RegisterComponent}>
      <h1 style={{ color: 'black', fontWeight: 'bold',fontSize:20 }}>Register</h1>
      <label style={{ color: 'black' }}>Name</label>
        <input type="text" placeholder="enter name" />
        
        <label style={{ color: 'black' }}>Email</label>
        <input type="email" placeholder="enter email" />
        
        <label style={{ color: 'black' }}>Password</label>
        <input type="password" placeholder="enter password" />
        
        
        <button type="create" style={{ color: 'black', fontWeight: 'bold'}}>Create Account</button>
        
      </form>
    </div>
  );
}

export default RegisterComponent;
