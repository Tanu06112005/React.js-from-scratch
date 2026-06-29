
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, incrementByAmount } from './redux/features/counterSlice'

const App = () => {

  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)  // store->counter->value

  const [num,setNum]=useState(5)

  return (
    <div>
      <h1>{count}</h1>
      
      <button
       onClick={()=>{
          dispatch(increment())
      }}
      >Increment</button>
      
      <button 
        onClick={()=>{
            dispatch(decrement())
        }}
        >Decrement</button>
        
        <button 
          onClick={()=>{
            dispatch(incrementByAmount(Number(num)))
          }}
        >IncreaseByAmot</button>

        <input type="number"
        placeholder='default 5'
         onChange={(e)=>{
          setNum(e.target.value)
         }}
         />
    </div>
  )
}

export default App