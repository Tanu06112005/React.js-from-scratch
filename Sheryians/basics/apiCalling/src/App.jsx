import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  //-------------------------------fetch api------------------------------------------------
// function getData(){
//   const response=fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response)
// }   /

// o/p:
    // Promise{pemding}    async await lgega

//using normal function 
 async function getData(){
  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  console.log(response)
    // console.log(response.json())// ye bhi pending aayega kyuki ye bhi async task h
    const data=await response.json()
    console.log(data)
}   

// using arrow function 
const getData1=async()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data=await response.json()
  console.log(data)
}

//-------------------------------------axios library-----------------------------------------
// npm i axios
// npm run dev
// import axios from 'axios'
// it also produces Promises 
//   hence needed async await


// normal function async and await
 async function getDataAxios1(){
  const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(response)
  // data isme direct aa jata h isliye      await respose .json    nhi krana pdta h
  console.log(response.data)
}

// arrow function async and await
const getDataAxios2=async()=>{
  const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log(response.data)
}


// now how do we use axios 
// note: console me check kro : 
      // wha se pta chala ki data is array of objects    [{},{},{},......]

      // we will create the useState to accept the data

      const [data, setData]=useState([])   // initially accepts the empty array

      const useAxiosDataInUI=async()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
        setData(response.data)
      }




  return (
    <div>
        <button  onClick={()=>{
          useAxiosDataInUI()
        }}> how we use the Axios se fetched data to reflect on the ui</button><br />

        <div>
          {data.map(function(elem,indx){
            return (
              <h3 key={indx}>{elem.userId} :{elem.title}</h3>
            )
          })}
        </div>
    </div>
      


         
        
        

        
    
   
  )
}

{/* <div>
       <button  onClick={()=>{
          getData()
        }}> Get Data(fetchnormal function)</button><br />
        

        <button  onClick={()=>{
          getData1()
        }}> Get Data(fetch arrow function)</button><br />


        
        <button  onClick={()=>{
          getDataAxios1()
        }}> Get Data(axios normal fun)</button><br />


         <button  onClick={()=>{
          getDataAxios2()
        }}> Get Data(axios arrow fun)</button><br /> */}

export default App