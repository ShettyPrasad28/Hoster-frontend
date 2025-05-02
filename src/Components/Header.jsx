import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl px-2.5 py-1.5 font-medium text-xs text-white">Hoster is hiring</button>
      </div>
      <ul className='hidden lg:flex items-center justify-between font-lato text-gray-500 gap-6'>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a className="text-gray-500"href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button> 
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  )
}

export default Header 