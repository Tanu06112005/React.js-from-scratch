import React, { useEffect, useRef } from 'react'
import { useState,useCallback } from 'react'

const App = () => {

const [length, setLength]=useState(0)
const [numberAllowed,setNumberAllowed]=useState(false);
const [charAllowed,setCharAllowed]=useState(false)
const [password,setPassword]=useState("")
const [copied, setCopied] = useState("copy");

const passwordRef=useRef(null)// ye password reference provide krna h input field ko

{/* we need to use useCallback hook here taki jb bhi ham multiple conditions apply kre(like length, number or chracter to baar baar re-render hone pr sara data of the unction re create n ho blki react use remember krke rakhe( its called memoization)) */}
{/* useCallback hook will memoize(store the function definition into the cache) jiski help se multiple function creation is prevented */}
{/* if we will not use useCallback hook to infinite no. of passwordGenerator function will be created in the memory infinite times render ho jayenge this is a greate issue for us  */}
const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="~!@#$%^&*(){}[]/"

    for(let i=1;i<=length;i++){
      let randomChar=Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(randomChar);
    }

    setPassword(pass)
},[length,numberAllowed,charAllowed])


const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select(); // used to shoe the selected part to the user
  passwordRef.current?.setSelectionRange(0,20)

  // used to copy the text actually
  window.navigator.clipboard.writeText(password)
  
  // ye logic shi nhi ho pa rha h
  // setCopied((prev)=>{
  //   if(prev=="copy")"copied"
  //   if(prev=="copied")"copy"
  // })
},[password])


{/* side stack ko maintain krne ke liye useEffect hook k use krte h (jiski help se rendering is performed first and then side stack k matter is executed) */}
  {/* Yes!  useEffect is automatically called by React. You never call it yourself. */}
useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,copied])




  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">      
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex mb-4 shadow rounded-lg overflow-hidden h-8'>
        <input type="text" 
        value={password}
          placeholder='Password'
          className='w-full bg-amber-50 outline-none px-3 py-1'
          readOnly
          ref={passwordRef}
        />
        <button
  className='bg-blue-700 w-20 text-white pb-1 outline-none shrink-0'
  onClick={copyPasswordToClipboard}
  >copy
</button>
      </div>

      <div className='flex  gap-x-2 text-sm'>
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          className='cursor-pointer'/>
          <label htmlFor="Length">Label:{length}</label>
        </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
         />
        <label htmlFor="number">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={()=>{setCharAllowed((prev)=>!prev)}}
        />
        <label htmlFor="character">Characters</label>
      </div>

      </div>
    </div>
  )
}

export default App