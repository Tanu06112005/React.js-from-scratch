import React from 'react'
import Rightcard from './rightcard.jsx'
const Rightcontent = (props) => {
    // console.log(props)
  return (
    <div id='right' className=' flex overflow-x-auto h-full w-2/3 gap-5 p-4'>
        {props.user.map(function(elem,indx){
            return (<Rightcard  key={indx} id={indx} img={elem.img} tag={elem.tag}/>)
        })}
        {/* <Rightcard />
        <Rightcard />
        <Rightcard />
        <Rightcard />
        <Rightcard /> */}


    </div>
  )
}

export default Rightcontent