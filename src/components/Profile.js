import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';


function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  console.log('object')

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token,'token')
      const response = await axios.get('http://localhost:8080/auth/profile', {
        headers: { Authorization: token },
      });
      setUser(response.data.user);
    } catch (error) {
      setMessage('Unable to fetch profile');
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  console.log(user,'user')
  return (
    <div>
      <h2>Profile </h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => navigate('/update')}>Update Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>{message}</p>
      )}

      {/* {user?.map((item)=>
      <div>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <button onClick={() => navigate('/update')}>Update Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )} */}
    </div>
  );
}

export default Profile;



