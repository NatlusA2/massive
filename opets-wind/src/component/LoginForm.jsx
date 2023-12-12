// src/LoginForm.js
import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onClose }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const Navigate = useNavigate()
  const handleLogin = () => {
    // Logika autentikasi dapat ditambahkan di sini
    // Contoh: Validasi username dan password
    console.log('Login berhasil/gagal', credentials);
    // Reset nilai form setelah login
    setCredentials({ username: '', password: '' });
    // Tutup form setelah login
    onClose();
  };

  return (
    <div className='form fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800  z-10 bg-opacity-75'>
      <div className='w-96 bg-white p-6 rounded-md'>

        <h1 className='text-center mb-4'> login </h1>
      <input
        type='text'
        placeholder='Username'
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className='w-full p-2 mb-4 border rounded-md'
      />
      <input
        type='password'
        placeholder='Password'
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className='w-full p-2 mb-4 border rounded-md'
      />
      <button
        onClick={handleLogin} 
        className='w-full bg-blue-500 text-white p-2 rounded-md'
      >
        Login
      </button>
      </div>
    </div>
  );
};

export default LoginForm;
