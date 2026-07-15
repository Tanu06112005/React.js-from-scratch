import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const [jokes,setJokes]=useState([])

  useEffect(()=>{
      // axios.get('http://localhost:3000/jokes')
      axios.get('/api/jokes')
      .then((response)=>{
        setJokes(response.data)
      })
      .catch((error)=>{{
        console.log(error)
      }})
  })
  
  return (
    <div>
        <h3>Trying to fetch the data from backend</h3>
        <p>No. of jokes recieveing: {jokes.length}</p>
        {
          jokes.map((joke,index)=>(
            <div key={joke.id}>  
              <span>{joke.id} </span>
              <h4>{joke.title}</h4>
              <h4>{joke.joke}</h4>
            </div>
          ))
        }
    </div>
  )
}

export default App
