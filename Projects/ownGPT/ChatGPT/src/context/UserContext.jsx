import  run  from '../geminiAPI.js'
import { createContext ,useState} from 'react'
import React from 'react'


export const dataContext=createContext()

const UserContext = ({children}) => {

const [input,setInput]=useState("")
const [result,setResult]=useState(false)
const [loading,setLoading]=useState(false)
const [resultData,setResultData]=useState("")

async function send(input){
    setResult(true)
    setLoading(true)

   let response= await run(input)
   setResultData(response)
    console.log("this is working")
}
    const data={
        input,
        setInput,
        send,
        loading,
        setLoading,
        result,
        setResult,
        resultData,
        setResultData
    }
  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
