import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState(''); // Initialize as empty string
  const [password, setPassword] = useState(''); // Initialize as empty string
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!email || !password) {
      setError('Email and Password cannot be empty.');
      return;
    }

    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        navigate("/map");
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          setError("Incorrect email/password or user doesn't exist");
        } else {
          setError("An error occurred, please try again.");
        }
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Login</h1>

        {error && <p style={{ color: 'blue' }}>{error}</p>}

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

        <button
          type="submit"
          style={{ color: 'black', fontWeight: 'bold' }}
        >
          Login In
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/Register" className="">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;
