import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';


function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', formData);
      const token = response.data.token
      localStorage.setItem("token",token)
      setMessage(response.data.message);
      navigate('/profile');
    } catch (error) {
      setMessage(error.response.data.message || 'Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Signup</button>
        <p>
        Already have an account?{' '}
        <Link to="/login">Click here to Login</Link>
      </p>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
