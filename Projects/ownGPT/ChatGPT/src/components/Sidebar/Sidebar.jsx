import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import './Sidebar.css'

const Sidebar = () => {

    const [extend,setEntend]=useState(false)

  return (
    <div className='sidebar'>
      <GiHamburgerMenu  id='ham' onClick={()=>{
        setEntend(prev=>(!prev))
      }}/>

      <div className="newchat">
            <FaPlus />
            {extend?<p>New Chat</p>:null}

      </div>

    <div className="recent">
<FaRegMessage />
            {extend?<p>what is this?</p>:null}
    </div>
            

    </div>
  )
}

export default Sidebar
