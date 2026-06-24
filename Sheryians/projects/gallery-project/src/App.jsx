import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
const [userData,setUserData]=useState([])
const [index,setIndex]=useState(1)

  const getData=async()=>{
    console.log("data aa gya")
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    console.log(response.data)
    setUserData(response.data)
  }

  // button ko comment krke direct ye use kkro
useEffect(function(){
  getData()
},[index])  // ye only tb tkhi c

  let printUserData=<h3 className='text-white text-1xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>
  if(userData.length>0){
    printUserData=userData.map(function(elem, indx){

      return ( 
        <div key={indx}>
          <Cards elem={elem} indx={indx} />
            
        </div>
      )
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      {/* <button
        onClick={getData} 
        className='active:scale-95 bg-green-600 p-3 mb-3 w-40 rounded text-2xl'>get data</button>
*/}
        <div className='flex flex-wrap gap-3 p-2'>
          {printUserData}
        </div>

        <div className='flex justify-center items-center gap-6'>
          <button className='h-15 w-20 bg-amber-400 px-4 text-2xl font-bold text-black py-2 cursor-pointer active:scale-95'
            onClick={()=>{
              if(index>1){
              setIndex(index-1)
                setUserData([])

              } 
            }}
          >Prev</button>
          <p> Page {index} </p>
          <button className='h-15 w-20 bg-amber-400 px-4 text-2xl font-bold text-black py-2 cursor-pointer active:scale-95'
            onClick={()=>{
              setIndex(index+1)
              setUserData([])
            }}
          >Next</button>
        </div> 
        
    </div>
  )
}

// isme we want ki button ko click kiye bina hi images show ho button press krne ke baad nhi 

export default App

// output nhi aa rha h iska reason is ki link nhi chal rhi h api wali