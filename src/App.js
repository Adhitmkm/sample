import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import Dummy from './dummy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/dummy" element={<Dummy />} />
        
      </Routes>
    </Router>
  );
}

export default App;


