import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// always remember ki tailwind css use kro to use import jrur kr liya kro index.css me 
// here className holds the various tailwind classes (dont get confused they are not styles these are the tailwind classes)
      // onclick always takes an function/ callback function 

function App() {
  const [colour,setColor]=useState("yellow")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:colour}}>
        <h1 style={{color:"purple",fontSize:"70px"}}><center><b>BACKGROUND COLOUR CHANGER</b></center></h1>
        <h3><center>using Tailwind CSS and useState hook with onclick function</center></h3>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"
        >
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>setColor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}>blue</button>

        <button onClick={()=>setColor("black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"black"}}>black</button>

        <button onClick={()=>setColor("gray")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"gray"}}>Gray</button>

        <button onClick={()=>setColor("olive")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"olive"}}>Olive</button>

        <button onClick={()=>setColor("magenta")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"magenta"}}>Lemon</button>

        <button onClick={()=>setColor("pink")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}>Pink</button>

        <button onClick={()=>setColor("orange")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"orange"}}>orange</button>

        <button onClick={()=>setColor("brown")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"brown"}}>brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
