import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1 className='text-white'>React with chai aur code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

// from this page we are providing access to Login anf profile
//Actually, you are not directly giving access from this page. 
// The UserContextProvider is giving access to everything wrapped inside it.