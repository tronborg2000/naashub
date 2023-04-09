import React, { useState } from 'react';
import Registration from './Registration';
import LoginPage from './LoginPage';

const Main = () => {
  const handleRegister = (user) => {
    // Handle registration logic here
    console.log('Registered user:', user);
  };

  const handleLogin = (user) => {
    // Handle login logic here
    console.log('Logged in user:', user);
  };

  return (
    <div>
      <h2>Registration</h2>
      <Registration onRegister={handleRegister} />
      <h2>Login</h2>
      <LoginPage onLogin={handleLogin} />
    </div>
  );
};

export default Main;
