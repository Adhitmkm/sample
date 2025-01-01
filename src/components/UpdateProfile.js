import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';


function UpdateProfile() {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:8080/auth/updateUser', formData, {
        headers: { Authorization: token },
      });
      setMessage('Profile updated successfully');
      navigate('/profile');
    } catch (error) {
      setMessage('Update failed');
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="New Name" onChange={handleChange} />
        <input type="password" name="password" placeholder="New Password" onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateProfile;
