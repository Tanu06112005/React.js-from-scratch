import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from 'react-toastify'
const App = () => {
  return (
    <div className='app'>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
