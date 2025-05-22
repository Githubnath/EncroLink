import React from 'react';

const Register = () => {
  return (
    <form className="max-w-sm mx-auto p-4 shadow-md">
      <h2 className="text-xl mb-4">Register</h2>
      <input type="text" placeholder="Name" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="btn">Sign Up</button>
    </form>
  );
};

export default Register;

