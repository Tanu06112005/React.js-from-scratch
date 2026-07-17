import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)     // this is one of the hooks that holds two values in the array
// set counter : jaha jaha bhi counter ki value aa rhi hogi har place pe update kr dega ye 
  const AddValue=()=>{

    if(counter<20){
      setCounter(counter+1)
      // setCounter(prev=>prev+counter);
    }
  }
  const ReduceValue=()=>{
    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>It helps in understandig why hooks are used anf hoe do we use it</h3>
      <p>counter{counter}</p>
      <button id='Add' onClick={AddValue}>Add counter {counter}</button>
      <button id='Reduce' onClick={ReduceValue}>Reduce counter {counter}</button>
      <p>counter{counter}</p>
    </>
  )
}

export default App



//Interview Answer

//onClick React ka event handler prop hai. 
// Iske through hum ek function pass karte hain jo button click hone par execute hota hai. 
// onClick={AddValue} function reference pass karta hai, jabki onClick={AddValue()} function
//  ko turant execute kar deta hai.


// curley braces kyu lgaya: to add javascript into it

