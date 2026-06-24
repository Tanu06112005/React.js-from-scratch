import React from 'react'

const Cards = (props) => { // maine yaha pe component banaya h n ki js likh rhi hu isliye First letter capital hoga
  return (
    <div ClassName='card'>
        <h1>Name:{props.name}</h1>
        <h2>Age:{props.age}</h2>
        <h2>Course:{props.course}</h2>
        <h2>PassingYear:{props.pyear}</h2>
    </div>
  )
}

export default Cards
