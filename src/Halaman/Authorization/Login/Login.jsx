import React from 'react';
import logoLogin from "../../../Assets/Login1.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Konfigurasi Axios Global
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true, // Untuk cookies/session
  headers: {
    'Content-Type': 'application/json'
  }
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigasi = useNavigate();

  const login = async () => {
    try {
      // 1. Login request
      const res = await api.post('/user/login', { email, password });
      const token = res.data.token;

      // 2. Simpan token
      localStorage.setItem('token-kedua', token);

      // 3. Set header untuk request berikutnya
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // 4. Redirect ke halaman todo
      navigasi("/todolist");

    } catch (err) {
      if (err.response?.status === 403) {
        alert("Akses ditolak: Domain tidak diizinkan");
      } else {
        alert(err.response?.data?.message || "Login gagal. Periksa email/password");
      }
    }
  };

  const Register = () => {
    navigasi("/register");
  };

  return (
    <div className='w-full flex container h-screen'>
      <div className='w-1/2 flex flex-col items-center justify-center space-y-3 bg-gray-700'>
        <h1 className='text-3xl text-white'>Login</h1>
        <input 
          type="email" 
          className='rounded-sm p-1 w-96 outline-none' 
          placeholder='Email' 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          className='rounded-sm p-1 w-96 outline-none' 
          placeholder='Password' 
          onChange={e => setPassword(e.target.value)}
        />
        <button className='bg-green-200 p-2 px-3' onClick={login}>Login</button>
        <div className='flex'>
          <p className='text-white mr-1'>Belum punya akun?</p>
          <button className='text-green-200' onClick={Register}>Register</button>
        </div>
      </div>
      <div className='w-3/6'>
        <img src={logoLogin} alt="Logo" className='h-full w-full' />
      </div>
    </div>
  );
};

export default Login;