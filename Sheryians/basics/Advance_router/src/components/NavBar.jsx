import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='bg-cyan-700 text-white flex justify-between px-9 py-3 text-2xl'>
        <div className='font-bold'>AdvanceRouting</div>
        <div className='flex gap-6 underline '>
            <Link  className='hover:text-blue-900' to='/'>Home</Link>
            <Link className='hover:text-blue-900' to='/about'>About</Link>
            <Link className='hover:text-blue-900' to='/contact'>Contact</Link>
            <Link className='hover:text-blue-900' to='/courses'>Courses</Link>

            <Link className='hover:text-blue-900' to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default NavBar