// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import React from 'react'
import Cards from './components/cards.jsx'

function App() {
  const students = [
  {
    name: "Tanushika",
    age: 21,
    course: "B.Tech",
    pyear: 2027
  },
  {
    name: "Rahul",
    age: 22,
    course: "BCA",
    pyear: 2026
  },
  {
    name: "Aman",
    age: 20,
    course: "B.Sc",
    pyear: 2025
  },
  {
    name: "Priya",
    age: 23,
    course: "MCA",
    pyear: 2024
  }
];

  return (
    <>
      <h1 ><center>Props Project</center></h1>
      <div className="container">
        {students.map(function(std,indx){
          return(
            <div className="c" key={indx}>
              //props pass kiye ja rhe h
                <Cards name={std.name} age={std.age} course={std.course} passingyear={std.pyear} />
            </div>
          )

      })}
      </div>
    </>
  )
}

export default App
