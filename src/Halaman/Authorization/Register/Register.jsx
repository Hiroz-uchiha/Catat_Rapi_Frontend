import React, { useState } from 'react'
import logoLogin from "../../../Assets/Login1.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigasi = useNavigate();

  const login = () => {
    navigasi("/login");
  }

  const register =  async() => {
     try{
      const data = { 
        username : username,
        email : email,
        password : password
      }
      axios.post("http://localhost:3001/user/register",data)
      .then(res => {
        navigasi("/login");
      })
     }catch(err){
      console.error("Error : " +err)
     }
  }

  return (
    <div className=' w-full flex container h-screen '>
        <div className=' w-1/2 flex flex-col items-center justify-center space-y-3 bg-gray-700'>
            <h1 className=' text-3xl text-white'>Register</h1>
            <input type="text" className=' rounded-sm p-1 w-96 outline-none' placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input type="email" className=' rounded-sm p-1 w-96 outline-none' placeholder='Email' onChange={e => setEmail(e.target.value)} />
            <input type='password' className=' rounded-sm p-1 w-96 outline-none' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            <button className=' bg-green-200 p-2 px-3' onClick={register}>Register</button>
            <div className=' flex'>
                <p className=' text-white mr-1'>Sudah punya akun?</p>
                <button className=' text-green-200' onClick={login}>Login</button>
            </div>
        </div>
        <div className=' w-3/6'>
            <img src={logoLogin} alt="Logo" className='h-full w-full' />
        </div>

    </div>
  )
}

export default Register
