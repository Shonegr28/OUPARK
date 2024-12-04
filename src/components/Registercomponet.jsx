import React, { useState } from 'react';
import './RegisterComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  console.log("cur-name: " + name);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input Validation
    if (!name || !email || !password) {
      setError("All fields are required. Please fill out the form.");
      return;
    }

    axios
      .post("http://localhost:3001/register", { name, email, password }) // Send post-request
      .then((result) => { 
        console.log(result);
        navigate("/accountCreated");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setError("Email already exists, please use a different email.");
        } else {
          setError("An error occurred, please try again.");
        }
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Register</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label style={{ color: 'black' }}>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label style={{ color: 'black' }}>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={{ color: 'black' }}>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" style={{ color: 'black', fontWeight: 'bold' }}>
          Create Account
        </button>

        <p className="text-sm text-center mt-4">
          Have an account? <Link to="/login">LOGIN</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterComponent;
