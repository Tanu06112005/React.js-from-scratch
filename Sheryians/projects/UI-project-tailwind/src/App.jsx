
import React from 'react'
import Section1 from './components/section1/Section1.jsx'
import Section2 from './components/section2/Section2.jsx'

const App = () => {
  const users=[
    {
      img:"https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://i.pinimg.com/736x/66/5b/d0/665bd03ccf83a8cac0a7b4651b4e680b.jpg",
      intro:"",
      tag:"UnSatisfied"
    },
    {
      img:"",
      intro:"https://i.pinimg.com/1200x/2f/60/f2/2f60f2c75f607e6a1b6b2beff4bcf565.jpg",
      tag:"Underbaked"
    },
    {
      img:"https://i.pinimg.com/736x/9e/12/1a/9e121a25ff459d0e36afa7734cb09567.jpg",
      intro:"",
      tag:"Banked"
    }
  ]
  return (
    <>
    <Section1 user={users}/>
    <Section2 />
    </>
  )
}

export default App