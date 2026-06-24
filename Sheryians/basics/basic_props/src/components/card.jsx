import React from 'react'



// everything is very easy 
// similar to how you call functions with arguments and parameters
const Card = (props) => {
  return (
    
    <div className='card'>
        <img src={props.img} />
        <h1>{props.user}</h1>
        <h4>Age: {props.age}</h4>
        <h4>Profession: {props.proff}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, soluta!</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card