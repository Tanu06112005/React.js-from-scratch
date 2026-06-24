import React from 'react'

const App = () => {
  
  localStorage.setItem("101","tanushika")
  localStorage.setItem("102","Devang")
  localStorage.setItem("103","Tripti")

  
  
  const data=localStorage.getItem("102")
  console.log(data)

  
  
  localStorage.removeItem("101")

  
  const student1={
    name:"mukti",
    age:67,
    city:"meerut"
  };
  localStorage.setItem("student1",student1)
  const data1=localStorage.getItem("student1")
  console.log(data1)  //[object Object]

  
  
  const student2={
    name:"muteeb",
    age:45,
    city:"rajasthan"
  };
  localStorage.setItem("student2",JSON.stringify(student2))
  const data2=localStorage.getItem("student2")
  console.log(data2)  //{"name":"muteeb","age":45,"city":"rajasthan"}
    console.log(typeof data2) // abi string for aa rhi h 
    
  const data3=JSON.parse(localStorage.getItem("student2"))
  console.log(data3)

  





  return (
    <div>App</div>
  )
}

export default App