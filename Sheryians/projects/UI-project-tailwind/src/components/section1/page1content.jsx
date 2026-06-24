import React from 'react'
import Leftcontent from './leftcontent.jsx'
import Rightcontent from './rightcontent.jsx'

const Page1content = (props) => {
    // isme bhi same concepts of props 
    // console.log(props)
  return (
    <div className=' flex justify-between items-center gap-10  px-18 py-10 h-[90vh]' >
        <Leftcontent />
        <Rightcontent user={props.user}/>
    </div>
  )
}

export default Page1content