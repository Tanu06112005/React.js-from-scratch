import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
 
const App = () => {

  const [products,setProducts]=useState([])

  useEffect(()=>{

  })
  return (
    <div>
        <h1>fetching products from the server</h1>
        <p>No. of Products Available</p>
    </div>
  )
}

export default App
