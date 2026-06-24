import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <Link className='absolute top-35 left-70' to='/home/mens'>mens</Link>
        <Link className='absolute top-35 left-88' to='/home/momens'>women</Link>
    
    <Outlet />

    </div>
  )
}

export default Home