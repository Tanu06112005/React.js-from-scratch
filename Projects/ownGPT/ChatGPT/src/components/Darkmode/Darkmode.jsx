import React,{useState,useEffect} from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

import './Darkmode.css'

const Darkmode = () => {
    const [mode,setMode]=useState("dark-mode")
  
    function toggle(){
        if(mode==="dark-mode"){
            setMode("light-mode")
        }else{
            setMode("dark-mode")
        }
    }

    // abhi to ye function ke through bs mode ki value toggle ho rha h 
    // but actually kaise change kiya jay 
    // uske liye we need to toggke the className of out index.html ke root k/body k
    // to jaise hi mode ki value chnge ho rhi h  vaise hi state change hona vhahiye 
    // for that we will use useEffect 

    // 
    useEffect(()=>{
        document.body.className=mode 
    },[mode])

    return (
   <button className="modebtn" onClick={()=>{
     toggle()
    console.log(mode)}}>
        {mode==="dark-mode"?<IoSunnyOutline />:<GoMoon />}
        
        </button>
  )
}

export default Darkmode
