import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigasi = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token-kedua")
    navigasi("/login")
  }

  return (
    <div className=' bg-slate-800 w-full h-16 flex justify-between items-center text-white'>
        <ul className=' flex w-1/3 justify-around'>
            <li className=' font-londrina text-3xl'>YFP</li>
            <li>
                <input type="text" className='w-96 text-black p-1 rounded-tl-full rounded-bl-full px-3' placeholder='Cari...' />
                <button className='bg-gray-500 p-1 px-3 rounded-tr-full rounded-br-full'>Cari</button>
            </li>
        </ul>
        <ul className=' flex w-1/4 justify-around'>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/todolist">Todolist</Link></li>
            <li><Link to="/gambar">Gambar</Link></li>
            <li className=' text-red-200'><button onClick={Logout} >Logout</button></li>
        </ul>
    </div>
  )
}


export default Navbar
