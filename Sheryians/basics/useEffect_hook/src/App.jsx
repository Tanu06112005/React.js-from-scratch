import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num,setNum]=useState(0)
  const [num2,setNum2]=useState(100)


// yaha pe dependency array include hi nhi hua h : to ye useEffect will always run 
  useEffect(function(){
    console.log('useEffect is running...')
  })



  // dependency array empty h : ye useEffect kisi pe dependent nhi h isliye ye kbhi bhi execute nhi hoga 
  // useEffect(function(){
  //   console.log('useEffect is running...')
  // },[])


  // // dependency array me only num h : ye useEffect tb tb execue hoga jb jb num execute hoga
  // useEffect(function(){
  //   console.log('useEffect is running...')
  // },[num])  


  // dependency array me dono h num and num2 dono : ye useEffect tb tb execue hoga jb jb num and num2 dono execute honge 
  // useEffect(function(){
  //   console.log('useEffect is running...')
  // },[num,num2])  
  return (
    <div>

      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button  id='btn'
      onMouseEnter={()=>{
        setNum(num+1)
      }} 
      onMouseLeave={()=>{
        setNum2(num2+100)
      }}> Hover this Button </button>

    </div>
  )
}

export default App