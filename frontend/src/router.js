import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Verify from './pages/Verify';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminPanel from './components/Dashboard/AdminPanel';
import Contact from './pages/Contact'; // Added Contact import

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/verify/:token" element={<Verify />} />
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/contact" element={<Contact />} /> {/* Contact route */}
  </Routes>
);

export default Router;

