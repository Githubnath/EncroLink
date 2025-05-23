// frontend/src/components/Header.jsx
import React from 'react';
import logo from '../assets/images/logo.png';
import avatarDefault from '../assets/images/avatar-default.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600">
      <img src={logo} alt="EncroLink Logo" className="h-10 w-auto" />

      <div className="flex items-center space-x-4">
        <span className="text-white font-semibold">Welcome, User</span>
        <img
          src={avatarDefault}
          alt="User Avatar"
          className="h-10 w-10 rounded-full border-2 border-white"
        />
      </div>
    </header>
  );
};

export default Header;

