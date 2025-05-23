import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Verify from './pages/Verify';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminPanel from './components/Dashboard/AdminPanel';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; // Create this file

// Example protected route wrapper (replace with real auth logic)
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = true; // Replace with actual check
  return isAuthenticated ? element : <Login />;
};

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/verify/:token" element={<Verify />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/admin" element={<ProtectedRoute element={<AdminPanel />} />} />
    <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
  </Routes>
);

export default Router;

