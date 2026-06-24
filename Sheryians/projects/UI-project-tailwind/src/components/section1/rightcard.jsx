import React from 'react'
import Rightcardcontent from './rightcardcontent'
const Rightcard = (props) => {
    // here props ka format h props={img:"",tag:""}
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-65 bg-red-500 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
            <Rightcardcontent key={props.indx} id={props.indx} tag={props.tag}  />
            
    </div>
  )
}

export default Rightcard