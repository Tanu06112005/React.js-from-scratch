import React from 'react'
import { useNavigate} from 'react-router-dom'

const Navigation = () => {
    let navigation=useNavigate()
  return (
    
    <div className='bg-cyan-800 flex gap-4 pl-10 pb-2' >
        <button 
        className='bg-amber-700 text-xl text-white p-2.5'
        onClick={()=>{
                    navigation('/')
        }}>Go to Home Page </button>
        <button 
        className='bg-amber-700  text-xl text-white p-2.5'
        onClick={()=>{
            navigation(-1)
        }}
        >Back</button>
        <button 
        className='bg-amber-700  text-xl text-white p-2.5'
        onClick={()=>{
            navigation(+1)
        }}
        >Next</button>

    </div>
  )
}

export default Navigation