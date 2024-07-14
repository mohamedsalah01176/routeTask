import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div className='px-10 py-5 flex justify-between items-center bg-black text-white'>
        <Link to={'/home'} className='text-3xl hover:scale-110 transition-all duration-300 font-bold cursor-pointer'>RT</Link>
        <div className='text-xl'>
            <Link to="/home" className='border-b-2 border-black hover:border-white transition-all duration-300 p-1'>Home</Link>
            <Link to="/about" className='border-b-2 border-black hover:border-white transition-all duration-300 mx-4 p-1' >About</Link>

        </div>
    </div> 
  )
}
    