import React from 'react';

const Login = () => {
  return (
    <form className="max-w-sm mx-auto p-4 shadow-md">
      <h2 className="text-xl mb-4">Login</h2>
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="btn">Login</button>
    </form>
  );
};

export default Login;

