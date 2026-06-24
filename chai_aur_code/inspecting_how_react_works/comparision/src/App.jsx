import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const username="muthoot"
  return (
    <>
      <h1>learning how to inject values {username} </h1>   
    </>
  )
}


// note :
   // username --> called expression 
   // {username}--> called evaluated expression ff
export default App
